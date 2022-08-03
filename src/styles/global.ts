import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    
    --extra-dark-gray:#1F1D1D;
    --dark-gray: #2C2C2C; 
    --medium-gray: #383838; //lines
    --light-gray: #787878;
    --gray-text: #B8B8B8;

    --orange: #FEA55F;
    --light-orange: #FFCFAB;

    --light-green: #6BFFBE; //gradients
    --overshadowed-green: #3C9D93; /* ???? */

    --blue: #5290FF; //gradients
    
    --purple: #C98BDF; /* ??? */

    --title: #E5E9F0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body { 
    background-color: var(--extra-dark-gray);
    color: var(--gray-text);

    padding: 4.31rem;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Fira Code', monospace;
    font-size: 16px;
  }


  .App {
    background-color: var(--dark-gray);
    border: 1px solid var(--medium-gray);
    border-radius: 8px;

    height: 100%;
  }

  a { 
    text-decoration: none;
    color: var(--gray-text);
  }
`;

// 1145
