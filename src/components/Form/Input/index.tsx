import { Container } from "./styles"

interface InputProps {
  name: string
  label: string
  isTextarea?: boolean
  isIngredientInput?: boolean
  textAreaRows?: number
}

export function Input({
  name,
  label,
  isTextarea = false,
  isIngredientInput = false,
  textAreaRows,
}: InputProps) {
  return (
    <Container isIngredientInput={isIngredientInput}>
      <label htmlFor={name}>{label}</label>

      {isTextarea ? (
        <textarea name={name} id={name} rows={textAreaRows} />
      ) : (
        <input name={name} id={name} />
      )}
    </Container>
  )
}
