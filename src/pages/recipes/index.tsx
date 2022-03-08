import { useEffect, useState } from "react"
import Head from "next/head"
import { api } from "../../services/api"
import { RecipeCard } from "../../components/RecipeCard"
import { Country } from "../countries"
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
  preparation_steps: string[]
  countryOwner: Country
  createdAt: string
  userOwner: User
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    api.get("/recipes").then((response) => setRecipes(response.data))
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
              data={recipe}
              countryOwner={recipe.countryOwner}
              userOwner={recipe.userOwner}
            />
          ))}
        </CardsContainer>
      </Container>
    </>
  )
}
