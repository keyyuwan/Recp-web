import Link from "next/link"
import { Container } from "./styles"

interface RecipeCardProps {
  id: string
  name: string
  recipeImage: string
  countryId: string
  countryName: string
  countryImage: string
  authorName: string
  authorImage: string
  authorId: string
}

export function RecipeCard({
  id,
  name,
  recipeImage,
  countryId,
  countryName,
  countryImage,
  authorName,
  authorImage,
  authorId,
}: RecipeCardProps) {
  return (
    <Link href={`/recipes/${id}`}>
      <Container>
        <img src={recipeImage} alt={name} />
        <div className="card-info">
          <h2>{name}</h2>

          <Link href={`/countries/${countryId}`}>
            <div className="country">
              <img src={countryImage} alt={countryName} />
              <p>{countryName}</p>
            </div>
          </Link>

          <Link href={`/user/${authorId}`}>
            <div className="author">
              <img src={authorImage} alt={authorName} />
              <p>{authorName}</p>
            </div>
          </Link>
        </div>
      </Container>
    </Link>
  )
}
