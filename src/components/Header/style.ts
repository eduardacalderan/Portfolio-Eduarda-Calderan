import styled from "styled-components";

export const Container = styled.header``;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid var(--medium-gray);

  height: 3.11rem;

  border-radius: 8px 8px 0 0;

  a,
  .person {
    padding: 0rem 2rem;

    display: flex;
    align-items: center;
  }

  nav {
    display: flex;
    margin-left: -740px;

    a {
      border-left: 1px solid var(--medium-gray);
      border-right: 1px solid var(--medium-gray);
    }
  }
  .contact-me {
    border-left: 1px solid var(--medium-gray);

    display: flex;
    align-items: center;
    a {
      padding: 0rem 2rem;

      display: flex;
      align-items: center;
    }
  }
`;
