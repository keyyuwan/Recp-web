import { useForm, SubmitHandler } from "react-hook-form"
import { withSSRAuth } from "../utils/withSSRAuth"
import { countries } from "../utils/countries"
import { sortArrayAlphabet } from "../utils/sortArrayAlphabet"
import { Input } from "../components/Form/Input"
import { FormAddInput } from "../components/Form/FormAddInput"
import { Container, Form, CountyField } from "../styles/register"

interface RegisterFormData {
  name: string
  image: string
  description: string
  ingredients: string[]
  preparation_steps: string[]
  country: string
}

export default function Register() {
  const { register, control, handleSubmit } = useForm()

  const handleRegister: SubmitHandler<RegisterFormData> = (
    values
  ) => {
    console.log(values)
  }

  const sortedCountries = sortArrayAlphabet(countries)

  return (
    <Container>
      <div className="content">
        <div className="title-image">
          <h1>Register your recipe</h1>
          <img src="/images/register.svg" alt="Register Recipe" />
        </div>

        <Form onSubmit={handleSubmit(handleRegister)}>
          <Input name="name" label="Name" {...register("name")} />
          <Input
            name="image"
            label="Image URL"
            {...register("image")}
          />
          <Input
            name="description"
            label="Description"
            isTextarea
            textAreaRows={3}
            {...register("description")}
          />

          <FormAddInput
            name="ingredients"
            label="Ingredients"
            buttonTitle="Add Ingredient"
            register={register}
            control={control}
          />

          <FormAddInput
            name="preparation_steps"
            label="Preparation Steps"
            buttonTitle="Add Step"
            isTextarea
            textAreaRows={1}
            register={register}
            control={control}
          />

          <CountyField>
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              {...register("country")}
            >
              {sortedCountries.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
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
