import { ActiveLink } from "../ActiveLink"
import { NavContainer } from "./styles"

interface NavBarProps {
  isBackgroundRed: boolean
}

export function NavBar({ isBackgroundRed }: NavBarProps) {
  return (
    <NavContainer isBackgroundRed={isBackgroundRed}>
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
  )
}
