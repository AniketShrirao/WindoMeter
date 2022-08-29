// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import theme from '.';

const GlobalStyle = createGlobalStyle`

    a {
       text-decoration: none;
       color: inherit;
       &:hover {
        color: inherit; 
      }
    }

    section {
      padding: 20px 0;
    }
`;

export default GlobalStyle;
