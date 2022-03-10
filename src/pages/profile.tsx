import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { FaPlus } from "react-icons/fa"
import { withSSRAuth } from "../utils/withSSRAuth"
import { api } from "../services/api"
import { UserInfo } from "../components/User/UserInfo"
import { RecipesList } from "../components/RecipesList"
import { NoRecipesText } from "../components/NoRecipesText"
import { Recipe } from "./recipes"
import { Container, RegisterRecipeButton } from "../styles/profile"

export default function Profile() {
  const { data: session } = useSession()

  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    api
      .get("/users/auth/recipes")
      .then((response) => setRecipes(response.data))
  }, [])

  const hasRecipes = recipes.length > 0

  return !!session ? (
    <Container>
      <UserInfo
        avatar={session.user.image}
        name={session.user.name}
        email={session.user.email}
      />

      {hasRecipes ? (
        <RecipesList recipes={recipes} />
      ) : (
        <NoRecipesText />
      )}

      <Link href="/register">
        <RegisterRecipeButton>
          <FaPlus />
          Register Recipe
        </RegisterRecipeButton>
      </Link>
    </Container>
  ) : null
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
