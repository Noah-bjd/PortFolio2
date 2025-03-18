// src/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Import Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import "tailwindcss";

  body {
    margin: 0;
    font-family: 'Quattrocento Sans', sans-serif; /* Set Quattrocento Sans as the default font */
    color: #333;
  }

  h1, h2, h3 {
    font-family: 'Quattrocento Sans', sans-serif; /* Use Quattrocento Sans for headings */
    font-weight: 700; /* Bold weight for headings */
  }

  p, a, button {
    font-family: 'Quattrocento Sans', sans-serif; /* Use Quattrocento Sans for paragraphs, links, and buttons */
    font-weight: 400; /* Regular weight */
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;