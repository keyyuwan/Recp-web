import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > label {
    color: var(--red-400);
    font-weight: 700;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: var(--red-500);
    background: 0;
  }
`
