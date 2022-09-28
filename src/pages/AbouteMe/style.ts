import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  .sidebar {
    display: flex;
    flex-direction: row;
  }

  .icons {
    padding: 1rem 0;
  }

  .menu {
    padding: 1rem 0;
  }

  .grid {
    display: grid;
    grid-auto-flow: column;
    gap: 2rem;

    line-height: 1.687rem;
  }
`;
