import {
  RestSerializer,
  createServer,
  Model,
  hasMany,
  belongsTo,
  Factory,
} from "miragejs"
import { faker } from "@faker-js/faker"
import { capitalize } from "../../utils/capitalize"
import { countries } from "../../utils/countries"

export function initServer() {
  const server = createServer({
    serializers: {
      application: RestSerializer,

      recipe: RestSerializer.extend({
        include: ["user"],
        embed: true,
      }),

      user: RestSerializer.extend({
        include: ["recipes"],
        embed: true,
      }),
    },

    models: {
      user: Model.extend({
        recipes: hasMany(),
      }),

      recipe: Model.extend({
        user: belongsTo(),
      }),
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.findName()
        },
        email() {
          return faker.internet.email().toLocaleLowerCase()
        },
        avatar() {
          return faker.internet.avatar()
        },
      }),

      recipe: Factory.extend({
        name() {
          return capitalize(faker.lorem.word())
        },
        image() {
          return `${faker.image.image()}?random=${Math.round(
            Math.random() * 1000
          )}`
        },
        ingredients() {
          const ingredients = faker.helpers.uniqueArray(
            faker.word.noun,
            5
          )

          return ingredients
        },
        preparationSteps() {
          const preparationSteps = faker.helpers.uniqueArray(
            faker.lorem.words,
            5
          )

          return preparationSteps
        },
        country() {
          const country = faker.random.arrayElement(countries)

          return country
        },
        createdAt() {
          return faker.date.recent(10)
        },
        afterCreate(recipe, server) {
          if (!recipe.user) {
            return recipe.update({
              user: server.create("user"),
            })
          }
        },
      }),
    },

    seeds(server) {
      server.createList("user", 2).forEach((user) => {
        server.createList("recipe", 2, { user })
      })
      server.createList("recipe", 5)
    },

    routes() {
      this.namespace = "api"
      // this.timing = 750

      this.get("/recipes")
      this.get("/recipes/:id")

      this.get("/users/:id")

      this.namespace = ""
      this.passthrough()
    },
  })

  return server
}