import { useEffect, useState } from "react"
import Head from "next/head"

import { api } from "../../services/api"
import { sortArrayAlphabet } from "../../utils/sortArrayAlphabet"
import { CountryCard } from "../../components/CountryCard"

import { Container, CardsContainer } from "../../styles/countries"

export interface Country {
  id: string
  name: string
  image: string
}

export default function Countries() {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    api
      .get("/countries")
      .then((response) => setCountries(response.data))
  }, [])

  return (
    <>
      <Head>
        <title>Countries | Recp</title>
      </Head>

      <Container>
        <h1>Countries</h1>

        <CardsContainer>
          {sortArrayAlphabet(countries).map((country) => (
            <CountryCard
              key={country.id}
              id={country.id}
              image={country.image}
              name={country.name}
            />
          ))}
        </CardsContainer>
      </Container>
    </>
  )
}
