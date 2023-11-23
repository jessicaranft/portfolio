import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 5.6rem;

  flex-grow: 1;
  min-height: 50vh;

  .loading-container {
    width: 100%;
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const PostsContainer = styled.div`
  ul {
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.4rem;
    flex-wrap: wrap;
  }

  ul li {
    width: 100%;
    min-width: 28rem;
    min-height: 26rem;
    background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};
    padding: 3.6rem;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.8rem;

    cursor: pointer;

    transition: background-color 0.3s;
  }

  ul li:hover {
    background-color: ${({ theme }) => theme.COLORS.DIVISION};
  }

  ul li strong {
    color: ${({ theme }) => theme.COLORS.FONT_H2};
  }

  ul li p {
    font-size: 1.2rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  ul li div {
    display: flex;
    flex-wrap: wrap;
  }

  ul li span {
    font-size: 1.2rem;

    margin: 0.8rem 0.8rem 0 0;

    background-color: ${({ theme }) => theme.COLORS.BG_PRIMARY};
    color: ${({ theme }) => theme.COLORS.LOGO};

    padding: 0.2rem;
    border-radius: 4px;
  }

  @media (max-width: 900px) {
    ul {
      display: flex;
      flex-direction: column;
    }

    ul li {
      padding: 2.4rem;
      width: 100%;
    }
  }
`
