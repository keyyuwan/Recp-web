import { useSession } from "next-auth/react"
import Link from "next/link"

import { Country } from "../../pages/countries"

import { Container } from "./styles"

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
}
interface RecipeCardProps {
  data: Recipe
  countryOwner: Country
  userOwner: User
}

export function RecipeCard({
  data,
  countryOwner,
  userOwner,
}: RecipeCardProps) {
  const { data: session } = useSession()

  const recipeOwnerIsUserAuth =
    session?.user?.email === userOwner.email

  return (
    <Link href={`/recipes/${data.id}`}>
      <Container>
        <img src={data.image} alt={data.name} className="food" />
        <div className="card-info">
          <h2>{data.name}</h2>

          <Link href={`/countries/${countryOwner.id}`}>
            <div className="country">
              <img src={countryOwner.image} alt={countryOwner.name} />
              <p>{countryOwner.name}</p>
            </div>
          </Link>

          <Link
            href={
              !recipeOwnerIsUserAuth ? `/user/${userOwner.id}` : ""
            }
          >
            <div className="author">
              <img
                src={userOwner.avatar}
                alt={userOwner.name}
                referrerPolicy="no-referrer" // avoids 403 error to user google image
              />
              <p>{userOwner.name}</p>
            </div>
          </Link>
        </div>
      </Container>
    </Link>
  )
}
