import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import { api } from "../../services/api"
import { Recipe as IRecipe } from "."
import { Container, RecipeInfo, Footer } from "./recipe"

interface RecipeInterface extends IRecipe {
  description: string
}

export default function Recipe() {
  const { query } = useRouter()
  const { id } = query

  const [recipe, setRecipe] = useState({} as RecipeInterface)

  useEffect(() => {
    api
      .get(`/recipes/${id}`)
      .then((response) => setRecipe(response.data.recipe))
  }, [])

  const isRecipeEmpty = Object.keys(recipe).length === 0

  return !isRecipeEmpty ? (
    <>
      <Head>
        <title>{recipe.name} | Recp</title>
      </Head>

      <Container>
        <RecipeInfo>
          <img src={recipe.image} alt={recipe.name} />

          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
        </RecipeInfo>

        <div className="section">
          <h2>Ingredients:</h2>

          <ol>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ol>
        </div>

        <div className="section">
          <h2>Preparation Steps:</h2>

          <ol>
            {recipe.preparationSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <Footer>
          <div className="wrapper">
            <h2>Dish origin</h2>
            <img
              src={recipe.country.image}
              alt={recipe.country.name}
            />
            <p>{recipe.country.name}</p>
          </div>

          <div className="wrapper">
            <h2>Published by</h2>
            <img
              src={recipe.user.avatar}
              alt={recipe.user.name}
              className="author-image"
            />
            <p>{recipe.user.name}</p>
          </div>
        </Footer>
      </Container>
    </>
  ) : null
}
