import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    background: var(--blue-light);
    color: #fff;
    padding: 1em 2em;
    border-radius: 0.25em;
    transition: ease-in filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
