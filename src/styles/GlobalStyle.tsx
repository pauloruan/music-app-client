import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --backgroud: 212121;
    --shape: #323232;
    --text: #fff;
    --primary: #0D7377;
    --secondary: #14FFEC;
    --font-base: 'Nunito', sans-serif;
    --box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button: {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.3;
    cursor: not-allowed;
  }

  body {
    background: var(--backgroud);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: var(--font-base);
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

`;

export default GlobalStyle;
