import { ActiveLink } from "../ActiveLink"
import { NavContainer } from "./styles"

export function NavBar() {
  return (
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
  )
}
