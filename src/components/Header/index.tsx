import { FaGoogle } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import { ActiveLink } from "./ActiveLink"
import {
  Container,
  DrawerButton,
  NavContainer,
  SignInButton,
} from "./styles"

export function Header() {
  return (
    <Container>
      <DrawerButton>
        <AiOutlineMenu size={24} />
      </DrawerButton>

      <h1>RECP</h1>

      <NavContainer>
        <ActiveLink activeClassName="active" href="/">
          <a>Home</a>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/recipes">
          <a>Recipes</a>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/countries">
          <a>Countries</a>
        </ActiveLink>
      </NavContainer>

      <SignInButton>
        <FaGoogle />
        Sign In with Google
      </SignInButton>
    </Container>
  )
}
