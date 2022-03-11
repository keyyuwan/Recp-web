import { MouseEvent } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import Router from "next/router"
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

  function handleRedirectToCountry(
    event: MouseEvent<HTMLDivElement>,
    countryId: string
  ) {
    event.stopPropagation()
    Router.push(`/countries/${countryId}`)
  }

  function handleRedirectToUserPage(
    event: MouseEvent<HTMLDivElement>,
    userId: string
  ) {
    event.stopPropagation()
    Router.push(`/user/${userId}`)
  }

  return (
    <Link href={`/recipes/${data.id}`}>
      <Container>
        <img src={data.image} alt={data.name} className="food" />
        <div className="card-info">
          <h2>{data.name}</h2>

          <div
            className="country"
            onClick={(event) =>
              handleRedirectToCountry(event, countryOwner.id)
            }
          >
            <img src={countryOwner.image} alt={countryOwner.name} />
            <p>{countryOwner.name}</p>
          </div>

          {recipeOwnerIsUserAuth ? null : (
            <div
              className="author"
              onClick={(event) =>
                handleRedirectToUserPage(event, userOwner.id)
              }
            >
              <img src={userOwner.avatar} alt={userOwner.name} />
              <p>{userOwner.name}</p>
            </div>
          )}
        </div>
      </Container>
    </Link>
  )
}
