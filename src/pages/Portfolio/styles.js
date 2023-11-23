import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5.6rem;

  flex-grow: 1;
  min-height: 50vh;

  .reverse {
    display: flex;
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;

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
    color: ${({ theme }) => theme.COLORS.LOGO};
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

  @media only screen and (max-width: 900px) {
    gap: 3.2rem;
  }
`
