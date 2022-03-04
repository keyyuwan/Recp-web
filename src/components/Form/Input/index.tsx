import {
  forwardRef,
  ForwardRefRenderFunction,
  HTMLAttributes,
} from "react"
import { Container } from "./styles"

interface InputProps
  extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  name: string
  label: string
  isTextarea?: boolean
  isIngredientInput?: boolean
  textAreaRows?: number
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement & HTMLTextAreaElement,
  InputProps
> = (
  {
    name,
    label,
    isTextarea = false,
    isIngredientInput = false,
    textAreaRows,
    ...rest
  },
  ref
) => {
  return (
    <Container isIngredientInput={isIngredientInput}>
      <label htmlFor={name}>{label}</label>

      {isTextarea ? (
        <textarea
          name={name}
          id={name}
          rows={textAreaRows}
          ref={ref}
          {...rest}
        />
      ) : (
        <input name={name} id={name} ref={ref} {...rest} />
      )}
    </Container>
  )
}

export const Input = forwardRef(InputBase)
