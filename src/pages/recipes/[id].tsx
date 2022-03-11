import { useEffect } from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import Router from "next/router"
import Head from "next/head"
import Link from "next/link"
import { useSession } from "next-auth/react"

import { api } from "../../services/api"
import { Recipe as IRecipe } from "."

import { Container, RecipeInfo, Footer } from "./recipe"

interface RecipeInterface extends IRecipe {
  description: string
}

interface RecipeProps {
  recipe: RecipeInterface
}

export default function Recipe({ recipe }: RecipeProps) {
  const { data: session } = useSession()

  useEffect(() => {
    if (!session) {
      Router.push("/")
    }
  }, [session])

  return (
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
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params

  const { data } = await api.get(`/recipes/${id}`)

  return {
    props: {
      recipe: data,
    },
  }
}
