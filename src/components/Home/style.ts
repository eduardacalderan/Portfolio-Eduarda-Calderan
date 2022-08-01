import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12.37rem 20.31rem;

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
    /* left: 980px; */
    /* top: 178.81px; */

    /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */

    display: flex;
    align-items: center;

    .green {
      position: absolute;
      width: 235px;
      height: 254px;
      left: 1114.08px;
      top: 350.47px;

      background: #6bffbe;
      opacity: 0.7;
      filter: blur(120px);
      transform: rotate(100deg);
      z-index: index 0;
    }

    .blue {
      position: absolute;
      width: 235px;
      height: 254px;
      left: 1380.16px;
      top: 500px;

      background: #5290ff;
      opacity: 0.7;
      filter: blur(120px);
      transform: rotate(258deg);
      z-index: 0;
    }

    img {
      z-index: 100;
      position: relative;

      height: 550px;
      width: auto;
    }
  }
`;
