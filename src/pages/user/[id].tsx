import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { api } from "../../services/api"
import { User as IUser } from "../recipes/index"
import { Container, Recipes } from "./styles"
import { RecipeCard } from "../../components/RecipeCard"

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
      <div className="user">
        <img src={user.avatar} alt={user.name} />

        <div className="user-info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      </div>

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
