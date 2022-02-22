import { countries } from "../utils/countries"
import { CountryCard } from "../components/CountryCard"
import { Container, CardsContainer } from "../styles/countries"

export default function Countries() {
  return (
    <Container>
      <h1>Countries</h1>

      <CardsContainer>
        {countries.map((country) => (
          <CountryCard
            key={country.id}
            image={country.image}
            name={country.name}
          />
        ))}
      </CardsContainer>
    </Container>
  )
}
