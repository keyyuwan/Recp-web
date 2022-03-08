import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { api } from "../../services/api"
import { RecipeCard } from "../../components/RecipeCard"
import { Recipe } from "../recipes"
import { Container, Recipes } from "./country"

interface ICountry {
  id: string
  name: string
  image: string
  recipes: Recipe[]
}

export default function Country() {
  const { query } = useRouter()
  const { id } = query

  const [country, setCountry] = useState({} as ICountry)

  useEffect(() => {
    api
      .get(`/countries/${id}`)
      .then((response) => setCountry(response.data))
  }, [])

  const isCountryEmpty = Object.keys(country).length === 0

  return !isCountryEmpty ? (
    <Container>
      <div className="country">
        <img src={country.image} alt={country.name} />
        <h1>{country.name}</h1>
      </div>

      <Recipes>
        <h2 className="title">Recipes</h2>

        <div className="recipes-cards-container">
          {country.recipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
              <RecipeCard
                data={recipe}
                countryOwner={country}
                userOwner={recipe.userOwner}
              />
            </Link>
          ))}
        </div>
      </Recipes>
    </Container>
  ) : null
}
