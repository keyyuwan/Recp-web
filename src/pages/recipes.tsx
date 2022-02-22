import { useEffect, useState } from "react"
import { api } from "../services/api"
import { Country } from "../utils/countries"
import { Container, CardsContainer } from "../styles/recipes"
import { RecipeCard } from "../components/RecipeCard"

interface User {
  id: string
  name: string
  avatar: string
  email: string
}

interface Recipe {
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
    <Container>
      <h1>Explore Recipes</h1>

      <CardsContainer>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            recipeImage={recipe.image}
            countryName={recipe.country.name}
            countryImage={recipe.country.image}
            authorName={recipe.user.name}
            authorImage={recipe.user.avatar}
          />
        ))}
      </CardsContainer>
    </Container>
  )
}
