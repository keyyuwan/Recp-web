import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { api } from "../../services/api"
import { Recipe } from "../recipes/index"
import { RecipeCard } from "../../components/RecipeCard"
import { Country as ICountry } from "../../utils/countries"
import { Container, Recipes } from "./country"

export default function Country() {
  const { query } = useRouter()
  const { id } = query

  const [country, setCountry] = useState({} as ICountry)
  const [countryRecipes, setCountryRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    api.get("/recipes").then((response) => {
      const { recipes } = response.data

      const { country: recipeCountry } = recipes.find(
        (recipe) => recipe.country.id === id
      )
      setCountry(recipeCountry)

      const countryRecipes = recipes.filter(
        (recipe) => recipe.country.id === id
      )
      setCountryRecipes(countryRecipes)
    })
  }, [])

  const isCountryEmpty = Object.keys(countryRecipes).length === 0

  return !isCountryEmpty && !!countryRecipes ? (
    <Container>
      <div className="country">
        <img src={country.image} alt={country.name} />
        <h1>{country.name}</h1>
      </div>

      <Recipes>
        <h2 className="title">Recipes</h2>

        <div className="recipes-cards-container">
          {countryRecipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
              <RecipeCard
                id={recipe.id}
                name={recipe.name}
                recipeImage={recipe.image}
                countryId={recipe.country.id}
                countryName={recipe.country.name}
                countryImage={recipe.country.image}
                authorName={recipe.user.name}
                authorImage={recipe.user.avatar}
                authorId={recipe.user.id}
              />
            </Link>
          ))}
        </div>
      </Recipes>
    </Container>
  ) : null
}
