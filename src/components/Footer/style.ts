import styled from "styled-components";

export const Container = styled.footer``;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid var(--medium-gray);

  height: 3.11rem;
  width: 100%;

  border-radius: 0 0 8px 8px;

  .all-find-me {
    display: flex;
    flex-direction: row;

    .find-me {
      padding: 0rem 2rem;

      display: flex;
      align-items: center;

      @media (max-width: 1880px) {
        padding: 0rem 1.3rem 0rem 2rem;
      }

      @media (max-width: 1100px) and (min-width: 905px) {
        font-size: 0.8888rem;
      }
    }

    .find-me-icons {
      display: flex;

      a {
        border-left: 1px solid var(--medium-gray);
        border-right: 1px solid var(--medium-gray);
        padding: 0rem 2rem;

        display: flex;
        align-items: center;

        font-size: 18px;

        transition: all 0.3s;

        @media (max-width: 2200px) {
          font-size: 90%;
          padding: 0rem 1.3rem;
        }

        :hover {
          background-color: var(--orange);
          color: var(--dark-gray);
        }
      }
    }
  }

  .my-github {
    display: flex;
    align-items: center;
    border-left: 1px solid var(--medium-gray);

    transition: all 0.3s;

    :hover {
      background-color: var(--orange);

      a {
        color: var(--dark-gray);
      }

      p {
        color: var(--extra-dark-gray);
      }
    }

    p {
      margin-right: 0.5rem;

      display: flex;
      align-items: center;

      font-size: 16px;

      @media (max-width: 1100px) and (min-width: 905px) {
        font-size: 0.8888rem;
      }
    }

    a {
      display: flex;
      align-items: center;

      padding: 0rem 2rem;

      font-size: 18px;
    }
  }
`;
