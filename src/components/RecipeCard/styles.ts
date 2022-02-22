import styled from "styled-components"

export const Container = styled.div`
  width: 280px;
  border-radius: 5px;
  background: var(--red-500);
  color: var(--gray-50);

  transition: transform 0.5s;

  & + & {
    margin: 1.5rem 0;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 160px;
    border-radius: 5px 5px 0 0;
  }

  .card-info {
    padding: 1.5rem;

    .country {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        height: 32px;
        width: 32px;
        border-radius: 8px;
      }
    }

    .author {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }
  }

  @media (min-width: 768px) {
    & + & {
      margin: 0;
    }
  }
`
