import Link from "next/link"
import { Country } from "../../pages/countries"
import { Container } from "./styles"

interface User {
  id: string
  name: string
  avatar: string
}
interface Recipe {
  id: string
  name: string
  image: string
  country: Country
  user: User
}
interface RecipeCardProps {
  data: Recipe
}

export function RecipeCard({ data }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${data.id}`}>
      <Container>
        <img src={data.image} alt={data.name} />
        <div className="card-info">
          <h2>{data.name}</h2>

          <Link href={`/countries/${data.country.id}`}>
            <div className="country">
              <img src={data.country.image} alt={data.country.name} />
              <p>{data.country.name}</p>
            </div>
          </Link>

          <Link href={`/user/${data.user.id}`}>
            <div className="author">
              <img src={data.user.avatar} alt={data.user.name} />
              <p>{data.user.name}</p>
            </div>
          </Link>
        </div>
      </Container>
    </Link>
  )
}
