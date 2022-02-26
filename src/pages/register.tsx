import { FormEvent } from "react"
import { withSSRAuth } from "../utils/withSSRAuth"
import { countries } from "../utils/countries"
import { sortArrayAlphabet } from "../utils/sortArrayAlphabet"
import { Input } from "../components/Form/Input"
import { FormAddInput } from "../components/Form/FormAddInput"
import { Container, Form, CountyField } from "../styles/register"

export default function Register() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  const sortedCountries = sortArrayAlphabet(countries)

  return (
    <Container>
      <div className="content">
        <div className="title-image">
          <h1>Register your recipe</h1>
          <img src="/images/register.svg" alt="Register Recipe" />
        </div>

        <Form onSubmit={handleSubmit}>
          <Input name="name" label="Name" />
          <Input name="image" label="Image URL" />
          <Input
            name="description"
            label="Description"
            isTextarea
            textAreaRows={3}
          />

          <FormAddInput
            name="ingredient"
            label="Ingredients"
            buttonTitle="Add Ingredient"
          />

          <FormAddInput
            name="preparation_step"
            label="Preparation Steps"
            buttonTitle="Add Step"
            isTextarea
            textAreaRows={1}
          />

          <CountyField>
            <label htmlFor="country">Country</label>
            <select name="country" id="country">
              {sortedCountries.map((country) => (
                <option value={country.id}>{country.name}</option>
              ))}
            </select>
          </CountyField>

          <button type="submit" className="register">
            Register Recipe
          </button>
        </Form>
      </div>
    </Container>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
