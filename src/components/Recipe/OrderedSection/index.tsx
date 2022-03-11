import { HTMLAttributes } from "react"
import { Container } from "./styles"

interface OrderedSectionProps extends HTMLAttributes<HTMLLIElement> {
  arr: string[]
}

export function OrderedSection({
  arr,
  ...rest
}: OrderedSectionProps) {
  return (
    <Container>
      <h2>Ingredients:</h2>

      <ol>
        {arr.map((item) => (
          <li key={item} {...rest}>
            {item}
          </li>
        ))}
      </ol>
    </Container>
  )
}
