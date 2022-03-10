import styled from "styled-components"

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem 2rem;

  h2 {
    font-size: 2rem;
    color: var(--red-400);
  }

  .section {
    margin-top: 2rem;

    ol {
      margin-top: 1rem;
      padding-left: 1rem;
      list-style: none;
      counter-reset: li;

      li {
        font-size: 1.5rem;
        line-height: 2.5rem;

        &.prep-step {
          padding-bottom: 1.2rem;
          margin-bottom: 1.2rem;
          border-bottom: 1px solid var(--gray-500);

          &:last-child {
            border-bottom: none;
          }
        }
      }

      li::before {
        content: counter(li);
        color: var(--red-400);
        display: inline-block;
        width: 1em;
        margin: 0 1rem -1em 0;
        counter-increment: li;
      }
    }
  }
`

export const RecipeInfo = styled.div`
  margin-top: 1rem;

  img {
    width: 100%;
    height: 240px;
    border-radius: 5px;

    @media (min-width: 768px) {
      height: 400px;
    }
  }

  h1 {
    margin-top: 0.5rem;
    color: var(--red-500);
  }

  p {
    color: var(--gray-500);
  }
`

export const Footer = styled.footer`
  margin-top: 4rem;

  .wrapper {
    text-align: center;
    margin-top: 2rem;

    img {
      margin-top: 1rem;
      width: 80px;
      height: 80px;
    }

    img.author-image {
      border-radius: 50%;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .wrapper {
      cursor: pointer;

      p:hover {
        text-decoration: underline;
      }
    }
  }
`
