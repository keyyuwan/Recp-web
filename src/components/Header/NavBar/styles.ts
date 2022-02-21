import styled from "styled-components"

export const NavContainer = styled.nav`
  margin-left: 4rem;

  a + a {
    margin-left: 2rem;
  }

  a.active {
    border-bottom: 1.5px solid var(--red);
  }

  @media (max-width: 767px) {
    display: none;
  }
`
