import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: none;
    color: ${({ theme }) => theme.COLORS.FONT_PRIMARY};
    padding: 1.8rem 4.8rem;

    border: 1px solid ${({ theme }) => theme.COLORS.DIVISION};

    display: flex;
    gap: 1.6rem;
    align-items: center;
    justify-content: center;
  }

  .hero {
    max-width: 60rem;
    margin-left: -7.2rem;
  }

  .main-content {
    min-width: 56rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .p-wrapper {
    min-height: 50px;
  }

  .h1-wrapper {
    min-height: 110px;
  }

  .h2-wrapper {
    min-height: 100px;
  }

  .button-container a {
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .main-content {
      min-width: auto;
    }

    .p-wrapper {
      min-height: 36px;
    }

    .h1-wrapper {
      min-height: 60px;
    }

    .h2-wrapper {
      min-height: 48px;
    }

    .main-content {
      width: 100%;
    }

    .button-container {
      width: 100%;
      margin: 2.4rem auto;

      button {
        width: 100%;
      }
    }

    .hero {
      max-width: 28.1rem;
      margin: auto;
    }
  }
`
