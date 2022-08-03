import styled from "styled-components";

export const Container = styled.header``;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid var(--medium-gray);

  height: 3.11rem;
  width: 100%;

  border-radius: 8px 8px 0 0;

  a,
  .person {
    padding: 0rem 2rem;

    display: flex;
    align-items: center;
  }

  .person-and-nav {
    display: flex;
    flex-direction: row;

    .person {
      min-width: 20.63rem;

      @media (max-width: 1750px) {
        min-width: 0rem;
      }
    }

    nav {
      display: flex;

      a {
        border-left: 1px solid var(--medium-gray);
        border-right: 1px solid var(--medium-gray);
      }
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
