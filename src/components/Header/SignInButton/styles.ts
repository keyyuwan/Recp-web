import styled from "styled-components"

export const Container = styled.button`
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
