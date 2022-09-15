import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 6.31rem 9.31rem;

  @media (max-width: 904px) {
    display: flex;
    flex-direction: column;
  }

  .presentation {
    @media (max-width: 904px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .hi {
      color: var(--title);
    }

    h1 {
      font-size: 2.3rem;
      color: var(--title);

      display: flex;
      flex-direction: column;

      margin-bottom: 5.07rem;

      span {
        font-size: 1.2rem;
        color: var(--blue);

        @media (max-width: 904px) {
          min-width: 400px;
        }
      }

      @media (max-width: 904px) {
        position: relative;
        max-width: 200px;
      }
    }

    .my-github {
      color: var(--light-green);
    }

    p {
      line-height: 1.85rem;

      span {
        color: var(--blue);
      }

      .equal {
        color: var(--gray-text);
      }

      a {
        color: var(--light-orange);
      }
    }
  }

  .my-avatar {
    width: 280.8px;
    height: 250.13px;

    display: flex;
    align-items: center;

    position: relative;

    @media (max-width: 904px) {
      height: 0;
      position: absolute;
    }

    img {
      z-index: 100;

      height: 300px;
      width: auto;

      @media (max-width: 904px) {
        display: none;
        visibility: hidden;
        opacity: 0;
        z-index: 0;
        max-height: 0;
      }
    }

    .green {
      position: absolute;
      width: 134px;
      height: 104px;
      left: 30.08px;
      top: 60px;

      background: #6bffbe;
      opacity: 0.6;
      filter: blur(80px);
      transform: rotate(100deg);
      z-index: index 0;

      @media (max-width: 904px) {
        width: 50px;
        height: 50px;
        filter: blur(60px);

        opacity: 0.999;

        top: 30px;
        left: -180px;
      }
    }

    .blue {
      position: absolute;
      width: 134px;
      height: 154px;
      left: 135.16px;
      top: 115px;

      background: #5290ff;
      opacity: 0.6;
      filter: blur(65px);
      transform: rotate(258deg);
      z-index: 0;

      @media (max-width: 904px) {
        width: 50px;
        height: 50px;
        filter: blur(60px);

        opacity: 0.999;

        top: 80px;
        left: -10px;
      }
    }
  }
`;
