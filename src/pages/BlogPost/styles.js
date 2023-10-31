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
`

export const PostContentContainer = styled.div`
  button {
    border: 0;
    background: 0;

    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.FONT_PRIMARY};

    display: flex;
    align-items: center;

    margin-bottom: 2.4rem;

    cursor: pointer;
  }

  h1 {
    font-size: 5.6rem;
    text-align: left;
  }

  h2 {
    margin-bottom: 1.2rem;
    text-align: left;
  }

  span {
    display: block;
    font-size: 1.4rem;
    margin-bottom: 3.6rem;
  }

  p,
  h3,
  h4,
  ul,
  pre {
    margin-bottom: 3.6rem;
  }

  p {
    text-align: justify;
  }

  h3 {
    font-size: 3.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.FONT_H2};
    text-align: left;
  }

  h4 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LOGO};
    text-align: left;
  }

  pre {
    background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};
    padding: 2.4rem;

    font-size: 1.4rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.HTML_TAG};

    display: block;
    white-space: pre-wrap;
  }

  ul {
    padding-left: 1.6rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.8rem;
    }

    h3 {
      font-size: 2.4rem;
    }

    h4 {
      font-size: 1.8rem;
    }
  }
`

export const PostDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin: 1.2rem 0 3.6rem;

  color: ${({ theme }) => theme.COLORS.TAG};

  div {
    display: flex;
    gap: 1.2rem;

    span {
      font-size: 1.2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.BG_SECONDARY};

      background-color: ${({ theme }) => theme.COLORS.TAG};
      border-radius: 8px;
      padding: 0.2rem 0.8rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;

    span {
      margin-bottom: 0.8rem;
    }

    .desktop-only {
      display: none;
    }
  }
`
