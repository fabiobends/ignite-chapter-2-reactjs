import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -6rem;
  gap: 2rem;
  
  div {
    padding: 1.5rem 2rem;
    background: var(--shape);
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-weight: 500;
      font-size: 2rem;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
