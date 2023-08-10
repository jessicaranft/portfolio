import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1440px;
  min-height: 100vh;

  margin: auto;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`

export const Main = styled.main`
  width: 100%;
  height: auto;
  padding-left: clamp(3rem, 5rem + 2vw, 15.6rem);
  padding-right: clamp(3rem, 5rem + 2vw, 15.6rem);
  margin: 6rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5.6rem;

  flex-grow: 1;
  min-height: 50vh;

  .reverse {
    display: flex;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 2.4rem;
    margin: 3.6rem auto;

    .reverse {
      flex-direction: column;
    }
  }
`

export const PortfolioItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  max-width: 1224px;
  margin: auto;

  ul {
    list-style: none;
  }

  ul li {
    line-height: 2.4rem;
  }

  ul a {
    color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
  }

  .preview-image {
    width: 100%;
  }

  .small-text {
    font-size: 1.4rem;
    text-align: center;
  }

  .date-text {
    font-size: 1.4rem;
  }

  .p-container {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    text-align: justify;
  }

  .stacks-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    padding: 0.4rem 0;
  }

  @media only screen and (max-width: 768px) {
    gap: 3.2rem;
  }
`
