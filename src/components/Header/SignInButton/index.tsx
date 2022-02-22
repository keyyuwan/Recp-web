import { FaGoogle } from "react-icons/fa"
import { Container } from "./styles"

interface SignInButtonProps {
  isBackgroundRed: boolean
}

export function SignInButton({ isBackgroundRed }: SignInButtonProps) {
  return (
    <Container isBackgroundRed={isBackgroundRed}>
      <FaGoogle />
      Sign In with Google
    </Container>
  )
}
