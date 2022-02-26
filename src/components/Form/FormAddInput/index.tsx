import { FaPlus } from "react-icons/fa"
import { Input } from "../Input"
import { Header } from "./styles"

interface FormAddInput {
  name: string
  label: string
  buttonTitle: string
}

export function FormAddInput({
  name,
  label,
  buttonTitle,
}: FormAddInput) {
  return (
    <>
      <Header>
        <label>{label}</label>
        <button type="button">
          <FaPlus />
          {buttonTitle}
        </button>
      </Header>
      <Input name={name} label="1." isIngredientInput />
    </>
  )
}
