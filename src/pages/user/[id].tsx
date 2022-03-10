import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { api } from "../../services/api"
import { User as IUser } from "../recipes/index"
import { UserInfo } from "../../components/User/UserInfo"
import { RecipesList } from "../../components/RecipesList"
import { NoRecipesText } from "../../components/NoRecipesText"
import { Container } from "./styles"

export default function User() {
  const { query } = useRouter()
  const { id } = query

  const [user, setUser] = useState({} as IUser)

  useEffect(() => {
    api.get(`/users/${id}`).then((response) => setUser(response.data))
  }, [])

  const isUserEmpty = Object.keys(user).length === 0

  const hasRecipes = user.recipes.length > 0

  return !isUserEmpty ? (
    <Container>
      <UserInfo
        avatar={user.avatar}
        name={user.name}
        email={user.email}
      />

      {hasRecipes ? (
        <RecipesList recipes={user.recipes} />
      ) : (
        <NoRecipesText />
      )}
    </Container>
  ) : null
}
