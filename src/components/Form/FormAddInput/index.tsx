import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import { IoMdRemoveCircle } from "react-icons/io"
import { Input } from "../Input"
import { Header, InputContainer } from "./styles"

interface FormAddInput {
  name: string
  label: string
  buttonTitle: string
  isTextarea?: boolean
  textAreaRows?: number
}

export function FormAddInput({
  name,
  label,
  buttonTitle,
  isTextarea = false,
  textAreaRows,
}: FormAddInput) {
  const [inputsCount, setInputsCount] = useState(1)

  function handleAddInput() {
    setInputsCount((prevState) => prevState + 1)
  }

  function handleRemoveInput() {
    setInputsCount((prevState) => prevState - 1)
  }

  return (
    <>
      <Header>
        <label>{label}</label>
        <button type="button" onClick={handleAddInput}>
          <FaPlus />
          {buttonTitle}
        </button>
      </Header>

      {[...Array(inputsCount)].map((_, index) => {
        if (index + 1 > 1) {
          return (
            <InputContainer>
              <Input
                name={name}
                label={`${index + 1}.`}
                isTextarea={isTextarea}
                isIngredientInput
                textAreaRows={textAreaRows}
              />

              <div className="remove" onClick={handleRemoveInput}>
                <IoMdRemoveCircle size={20} />
              </div>
            </InputContainer>
          )
        } else {
          return (
            <Input
              name={name}
              label={`${index + 1}.`}
              isTextarea={isTextarea}
              isIngredientInput
              textAreaRows={textAreaRows}
            />
          )
        }
      })}
    </>
  )
}
