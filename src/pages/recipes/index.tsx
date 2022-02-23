import { useEffect, useState } from "react"
import Head from "next/head"
import { api } from "../../services/api"
import { Country } from "../../utils/countries"
import { RecipeCard } from "../../components/RecipeCard"
import { Container, CardsContainer } from "../../styles/recipes"

export interface User {
  id: string
  name: string
  avatar: string
  email: string
  recipes: Recipe[]
}

export interface Recipe {
  id: string
  name: string
  image: string
  ingredients: string[]
  preparationSteps: string[]
  country: Country
  createdAt: string
  user: User
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    api
      .get("/recipes")
      .then((response) => setRecipes(response.data.recipes))
  }, [])

  return (
    <>
      <Head>
        <title>Recipes | Recp</title>
      </Head>

      <Container>
        <h1>Explore Recipes</h1>

        <CardsContainer>
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
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
          ))}
        </CardsContainer>
      </Container>
    </>
  )
}
