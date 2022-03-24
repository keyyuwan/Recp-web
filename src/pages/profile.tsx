import { useState } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { FaPlus } from "react-icons/fa"
import { NoRecipesText } from "../components/NoRecipesText"
import { RecipesList } from "../components/RecipesList"
import { UserInfo } from "../components/User/UserInfo"
import { useUserAuthRecipes } from "../hooks/useUserAuthRecipes"
import { withSSRAuth } from "../utils/withSSRAuth"
import { Container, RegisterRecipeButton } from "../styles/profile"

export default function Profile() {
  const { data: session } = useSession()

  const [isRecipesLoading, setIsRecipesLoading] = useState(true)

  const recipes = useUserAuthRecipes(
    isRecipesLoading,
    setIsRecipesLoading
  )

  function setRecipesLoadingToTrue() {
    setIsRecipesLoading(true)
  }

  return !!session ? (
    <Container>
      <UserInfo
        avatar={session.user.image}
        name={session.user.name}
        email={session.user.email}
      />

      {isRecipesLoading ? (
        <h1>Loading...</h1>
      ) : recipes.length === 0 ? (
        <NoRecipesText />
      ) : (
        <RecipesList
          recipes={recipes}
          setRecipesLoadingToTrue={setRecipesLoadingToTrue}
        />
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
