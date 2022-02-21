import Link from "next/link"
import { FaGoogle } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
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
        <Link href="/">
          <a className="active">Home</a>
        </Link>
        <Link href="#">
          <a>Recipes</a>
        </Link>
        <Link href="#">
          <a>Countries</a>
        </Link>
      </NavContainer>

      <SignInButton>
        <FaGoogle />
        Sign In with Google
      </SignInButton>
    </Container>
  )
}
