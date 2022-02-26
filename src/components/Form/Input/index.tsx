import { Container } from "./styles"

interface InputProps {
  name: string
  label: string
  isTextarea?: boolean
  isIngredientInput?: boolean
}

export function Input({
  name,
  label,
  isTextarea = false,
  isIngredientInput = false,
}: InputProps) {
  return (
    <Container isIngredientInput={isIngredientInput}>
      <label htmlFor={name}>{label}</label>

      {isTextarea ? (
        <textarea name="description" id="description" rows={3} />
      ) : (
        <input name={name} id={name} />
      )}
    </Container>
  )
}
