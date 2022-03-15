import { useSession } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa"
import { NoRecipesText } from "../components/NoRecipesText"
import { RecipesList } from "../components/RecipesList"
import { UserInfo } from "../components/User/UserInfo"
import { api } from "../services/api"
import { Container, RegisterRecipeButton } from "../styles/profile"
import { withSSRAuth } from "../utils/withSSRAuth"
import { Recipe } from "./recipes"

export default function Profile() {
  const { data: session } = useSession()

  const [recipes, setRecipes] = useState<Recipe[]>([])

  // salvar sub nos cookies pra eu poder ter acesso pelo server-side
  useEffect(() => {
    api
      .get("/users/auth/recipes")
      .then((response) => setRecipes(response.data))
  }, [])

  const hasRecipes = recipes?.length > 0

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
