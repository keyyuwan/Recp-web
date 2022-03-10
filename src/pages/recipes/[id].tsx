import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"
import { api } from "../../services/api"
import { Recipe as IRecipe } from "."
import { withSSRAuth } from "../../utils/withSSRAuth"
import { Container, RecipeInfo, Footer } from "./recipe"

interface RecipeInterface extends IRecipe {
  description: string
}

export default function Recipe() {
  const { query } = useRouter()
  const { id } = query

  const [recipe, setRecipe] = useState<RecipeInterface>(
    {} as RecipeInterface
  )

  useEffect(() => {
    api
      .get(`/recipes/${id}`)
      .then((response) => setRecipe(response.data))
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
            {recipe.preparation_steps.map((step) => (
              <li key={step} className="prep-step">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <Footer>
          <Link href={`/countries/${recipe.countryOwner.id}`}>
            <div className="wrapper">
              <h2>Dish origin</h2>
              <img
                src={recipe.countryOwner.image}
                alt={recipe.countryOwner.name}
              />
              <p>{recipe.countryOwner.name}</p>
            </div>
          </Link>

          <Link href={`/user/${recipe.userOwner.id}`}>
            <div className="wrapper">
              <h2>Published by</h2>
              <img
                src={recipe.userOwner.avatar}
                alt={recipe.userOwner.name}
                className="author-image"
              />
              <p>{recipe.userOwner.name}</p>
            </div>
          </Link>
        </Footer>
      </Container>
    </>
  ) : null
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
