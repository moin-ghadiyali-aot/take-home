import { createGlobalStyle } from 'styled-components'

import Arrow from '../assets/Arrow.svg'

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

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
      font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      font-size: 62.5%;
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

  .Dropdown-control {
    font-size: 1.4rem;
    border: 1px solid #eee;
    padding: 1.3rem 1.6rem;
    border-radius: 10px;
    line-height: 2rem;

    &:hover {
      box-shadow: none;
    }
  }

  .is-open .Dropdown-control {
    border: 1px solid #ccc;
    border-radius: 10px 10px 0 0;
  }

  .Dropdown-arrow {
    top: 18px;
  }

  .Dropdown-placeholder {
    opacity: 0.5;
  }

  .Dropdown-placeholder.is-selected {
    opacity: 1;
  }

  .Dropdown-menu {
    border-radius: 10px;
    border: 1px solid #e4e4e5;
    box-shadow: none;
  }

  .is-open .Dropdown-menu {
    border-radius: 0 0 10px 10px;
  }

  /* width */
  .Dropdown-menu::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  .Dropdown-menu::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  .Dropdown-menu::-webkit-scrollbar-thumb {
    background: #ccc;
  }

  /* Handle on hover */
  .Dropdown-menu::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .react-datepicker-wrapper {
    width: 100%;
    display: block;
  }

  .Dropdown-option.is-selected {
    background: var(--grey);
  }

  .react-datepicker__input-container input {
    font-size: 1.4rem;
    border: 1px solid #eee;
    padding: 1.3rem 1.6rem;
    border-radius: 10px;
    line-height: 2rem;
    border-radius: 10px;
    border: none;
    border: 1px solid #eee;
    outline: 0;
    width: 100%;
    display: block;

    &:focus {
      border: 1px solid #ccc;
    }
  }

  .Dropdown-option {
    font-size: 1.4rem;
    line-height: 2rem;
    padding: 1.3rem 1.4rem;

    + .Dropdown-option {
      border-top: 1px solid #e4e4e5;
    }

    &:hover {
      background: #f9f9fa;
    }
  }

  .Dropdown-arrow {
    border: 0 !important;
    width: 12px; height: 7px;
    background: url(Arrow) no-repeat center;
  }
`
export default GlobalStyle
