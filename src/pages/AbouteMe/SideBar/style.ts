import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  border-right: 1px solid var(--medium-gray);

  padding: 1rem 1rem;

  a {
    font-size: 1.5rem;

    cursor: pointer;

    transition: color 0.2s;

    + a {
      margin-top: 1.4rem;
    }

    :hover,
    ::selection {
      color: white;
    }
  }
`;
