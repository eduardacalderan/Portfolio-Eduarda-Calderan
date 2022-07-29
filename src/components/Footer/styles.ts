import styled from "styled-components";

export const Container = styled.footer``;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid var(--medium-gray);

  height: 3.11rem;

  .find-me {
    padding: 0rem 2rem;

    display: flex;
    align-items: center;
  }

  .find-me-icons {
    display: flex;
    margin-left: -872px;

    i {
      border-left: 1px solid var(--medium-gray);
      border-right: 1px solid var(--medium-gray);
      padding: 0rem 2rem;

      display: flex;
      align-items: center;

      font-size: 20px;
    }
  }
  .my-github {
    display: flex;
    align-items: center;
    border-left: 1px solid var(--medium-gray);
    p {
      margin-right: 0.5rem;

      display: flex;
      align-items: center;

      font-size: 16px;
    }

    i {
      display: flex;
      align-items: center;

      padding: 0rem 2rem;

      font-size: 18px;
    }
  }
`;
