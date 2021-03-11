import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
      --accent: #FED949;
      --dark-grey: #97999B;
      --grey: #F9F9FA;
      --light-grey: #D0D0CE;
      font-family: 'Open Sans', sans-serif;
      font-size:62.5%;
  }

  ::placeholder {
    color:var(--light-grey)
  }

  a {
    text-decoration:none;
  }

  button {
    border: none;
  }

  li {
    list-style: none;
  }

`
export default GlobalStyle