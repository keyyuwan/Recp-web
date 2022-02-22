import { Container } from "./styles"

interface CountryCardProps {
  image: string
  name: string
}

export function CountryCard({ image, name }: CountryCardProps) {
  return (
    <Container>
      <img src={image} alt={name} />

      <h2>{name}</h2>
    </Container>
  )
}
