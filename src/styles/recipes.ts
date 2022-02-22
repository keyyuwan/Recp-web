import styled from "styled-components"

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  h1 {
    color: var(--red);
  }
`

export const CardsContainer = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 320px);
    justify-content: center;
    gap: 2rem;
  }
`
