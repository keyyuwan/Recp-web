import { Container } from "./styles"

interface RecipeCardProps {
  name: string
  recipeImage: string
  countryName: string
  countryImage: string
  authorName: string
  authorImage: string
}

export function RecipeCard({
  name,
  recipeImage,
  countryName,
  countryImage,
  authorName,
  authorImage,
}: RecipeCardProps) {
  return (
    <Container>
      <img src={recipeImage} alt={name} />
      <div className="card-info">
        <h2>{name}</h2>

        <div className="country">
          <img src={countryImage} alt={countryName} />
          <p>{countryName}</p>
        </div>

        <div className="author">
          <img src={authorImage} alt={authorName} />
          <p>{authorName}</p>
        </div>
      </div>
    </Container>
  )
}
