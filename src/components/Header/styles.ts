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
