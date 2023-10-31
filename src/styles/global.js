import { createGlobalStyle } from 'styled-components'
import background from '../assets/background.svg'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  .page-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .bg {
    background: url(${background}) repeat;
    position: absolute;
    width: 150%;
    height: 150%;
    z-index: -1;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BG_PRIMARY};
    color: ${({ theme }) => theme.COLORS.FONT_PRIMARY};
  }

  body, input, button, textarea {
    font-family: 'Fira Code', monospace;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  p {
    line-height: 160%;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.COLORS.LOGO};
  }

  button, a {
    cursor: pointer;
    transition: filter 0.3s;
  }

  button:hover, a:hover {
    filter: brightness(0.5);
  }

  h1 {
    font-size: 7.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.FONT_H1};

    margin: -1rem 0;

  }

  h2 {
    font-size: 3.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.FONT_H2};

    margin: -.4rem 0;
  }

  .mobile-only {
    display: none;
  }

  .desktop-only {
    display: block;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 3.8rem;
    }

    h2 {
      font-size: 2.2rem;
    }

    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: block;
    }
  }
`
