import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../services/api"
import { withSSRAuth } from "../utils/withSSRAuth"
import { sortArrayAlphabet } from "../utils/sortArrayAlphabet"
import { Input } from "../components/Form/Input"
import { FormAddInput } from "../components/Form/FormAddInput"
import { Country } from "./countries"
import { Container, Form, CountyField } from "../styles/register"

interface RegisterFormData {
  name: string
  image: string
  description: string
  ingredients: string[]
  preparation_steps: string[]
  country: string
}

const registerFormSchema = yup.object().shape({
  name: yup.string().required("Recipe name is required"),
  image: yup.string().required("Image URL is required"),
  description: yup.string().required("Description is required"),
  ingredients: yup
    .array()
    .of(
      yup.string().required("Recipe must have at least 1 ingredient")
    )
    .min(1),
  preparation_steps: yup
    .array()
    .of(
      yup
        .string()
        .required("Recipe must have at least 1 preparation step")
    )
    .min(1),
})

export default function Register() {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    api
      .get("/countries")
      .then((response) => setCountries(response.data))
  }, [])

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  })

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
          <Input
            name="name"
            label="Name"
            errorText={errors.name?.message}
            {...register("name")}
          />
          <Input
            name="image"
            label="Image URL"
            errorText={errors.image?.message}
            placeholder="Example: https://github.com/keyyuwan.png"
            {...register("image")}
          />
          <Input
            name="description"
            label="Description"
            isTextarea
            textAreaRows={3}
            errorText={errors.description?.message}
            {...register("description")}
          />

          <FormAddInput
            name="ingredients"
            label="Ingredients"
            buttonTitle="Add Ingredient"
            register={register}
            control={control}
            errorText={
              errors.ingredients && errors.ingredients[0]?.message
            }
          />

          <FormAddInput
            name="preparation_steps"
            label="Preparation Steps"
            buttonTitle="Add Step"
            isTextarea
            textAreaRows={1}
            register={register}
            control={control}
            errorText={
              errors.preparation_steps &&
              errors.preparation_steps[0]?.message
            }
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
