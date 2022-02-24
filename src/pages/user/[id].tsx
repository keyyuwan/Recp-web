import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { api } from "../../services/api"
import { User as IUser } from "../recipes/index"
import { RecipeCard } from "../../components/RecipeCard"
import { UserInfo } from "../../components/User/UserInfo"
import { Container, Recipes } from "./styles"

export default function User() {
  const { query } = useRouter()
  const { id } = query

  const [user, setUser] = useState({} as IUser)

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then((response) => setUser(response.data.user))
  }, [])

  const isUserEmpty = Object.keys(user).length === 0

  return !isUserEmpty ? (
    <Container>
      <UserInfo
        avatar={user.avatar}
        name={user.name}
        email={user.email}
      />

      <Recipes>
        <h2 className="title">Recipes</h2>

        <div className="recipes-cards-container">
          {user.recipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
              <RecipeCard
                id={recipe.id}
                name={recipe.name}
                recipeImage={recipe.image}
                countryId={recipe.country.id}
                countryName={recipe.country.name}
                countryImage={recipe.country.image}
                authorName={user.name}
                authorImage={user.avatar}
                authorId={user.id}
              />
            </Link>
          ))}
        </div>
      </Recipes>
    </Container>
  ) : null
}
