import { AiOutlineMenu } from "react-icons/ai"
import { NavBar } from "./NavBar"
import { SignInButton } from "./SignInButton"
import { Container, DrawerButton } from "./styles"

export function Header() {
  return (
    <Container>
      <DrawerButton>
        <AiOutlineMenu size={24} />
      </DrawerButton>

      <h1>RECP</h1>

      <NavBar />

      <SignInButton />
    </Container>
  )
}
