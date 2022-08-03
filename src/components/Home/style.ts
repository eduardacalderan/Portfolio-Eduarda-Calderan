import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12.37rem 20.31rem;

  @media (max-width: 1750px) {
    padding: 8rem 10.31rem;
  }

  .presentation {
    .hi {
      color: var(--title);
    }

    h1 {
      font-size: 3.87rem;
      color: var(--title);

      display: flex;
      flex-direction: column;

      margin-bottom: 5.07rem;

      span {
        font-size: 2rem;
        color: var(--blue);

        @media (max-width: 1814px) {
          font-size: calc(2rem - 20%);

          @media (max-width: 1285px) {
            font-size: calc(2rem - 30%);
          }
        }
      }

      @media (max-width: 1814px) {
        font-size: calc(3.87rem - 30%);
      }

      @media (max-width: 1681px) {
        font-size: calc(3.87rem - 90%);
      }

      @media (max-width: 1285px) {
        font-size: calc(3.87rem - 130%);
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

  .sla {
    width: 389.8;
    height: 371.13px;

    display: flex;
    align-items: center;

    position: relative;

    img {
      z-index: 100;

      height: 550px;
      width: auto;

      @media (max-width: 1814px) {
        height: calc(550px - 30%);
      }

      @media (max-width: 1814px) {
        height: calc(550px - 50%);
      }
    }

    .green {
      position: absolute;
      width: 235px;
      height: 254px;
      left: 80.08px;
      top: 40px;

      background: #6bffbe;
      opacity: 0.7;
      filter: blur(100px);
      transform: rotate(100deg);
      z-index: index 0;

      @media (max-width: 1814px) {
        width: calc(235px - 20%);
        height: calc(254px - 20%);

        filter: blur(90px);

        opacity: 0.999;
      }

      @media (max-width: 1750px) {
        left: 60px;
      }

      @media (max-width: 1285px) {
        width: calc(235px - 50%);
        height: calc(254px - 30%);

        filter: blur(80px);

        left: 80px;
      }
    }

    .blue {
      position: absolute;
      width: 235px;
      height: 254px;
      left: 244.16px;
      top: 180px;

      background: #5290ff;
      opacity: 0.7;
      filter: blur(100px);
      transform: rotate(258deg);
      z-index: 0;

      @media (max-width: 1814px) {
        width: calc(235px - 20%);
        height: calc(254px - 20%);

        filter: blur(90px);

        opacity: 0.999;
      }

      @media (max-width: 1750px) {
        left: 190.16px;
      }

      @media (max-width: 1285px) {
        width: calc(235px - 50%);
        height: calc(254px - 30%);

        filter: blur(80px);
      }
    }
  }
`;
