import styled from "styled-components"

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem 2rem;

  .user {
    margin-top: 2rem;
    text-align: center;

    img {
      border-radius: 50%;
    }

    .user-info {
      margin-top: 1rem;

      h1 {
        color: var(--red-500);
      }

      p {
        color: var(--gray-500);
      }
    }
  }
`

export const Recipes = styled.div`
  margin-top: 4rem;

  h2.title {
    font-size: 2rem;
    color: var(--red-400);
  }

  .recipes-cards-container {
    margin-top: 2rem;

    @media (min-width: 768px) {
      display: grid;
      grid-template: 1fr / repeat(3, 320px);
      justify-content: center;
      gap: 2rem;
    }
  }
`
