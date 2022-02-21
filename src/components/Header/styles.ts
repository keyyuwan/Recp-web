import styled from "styled-components"

export const Container = styled.header`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
`

export const DrawerButton = styled.div`
  svg {
    margin-right: 1.5rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

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

export const SignInButton = styled.button`
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--red);
  color: var(--white);

  height: 3rem;
  border-radius: 3rem;
  padding: 0 1.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    margin-right: 1rem;
  }
`
