/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/naming-convention */
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

  a {
    transition: color 0.2s;
    position: relative;

    :hover,
    ::selection {
      color: white;
    }

    ::after {
      content: "";
      width: 0%;
      height: 2px;
      background: var(--orange);

      position: absolute;
      left: 0;
      bottom: 0rem;

      transition: width 0.2s;
    }

    :hover::after {
      width: 100%;
    }
  }

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

    @media (max-width: 1100px) and (min-width: 905px) {
      font-size: 0.8888rem;
    }
  }

  .contact-me {
    border-left: 1px solid var(--medium-gray);

    display: flex;

    @media (max-width: 1100px) and (min-width: 905px) {
      font-size: 0.8888rem;
    }

    a {
      padding: 0rem 2rem;

      display: flex;
      align-items: center;

      transition: color 0.2s;
      position: relative;

      ::after {
        content: "";
        width: 0%;
        height: 2px;
        background: var(--orange);

        position: absolute;
        left: 0;

        transition: width 0.2s;
      }

      :hover::after {
        width: 100%;
      }
    }
  }
`;

// 904 => tablet
