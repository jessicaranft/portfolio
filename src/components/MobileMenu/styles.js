import styled from 'styled-components'

export const Container = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};

  > header {
    display: flex;
    align-items: center;
    height: 11.6rem;
    padding: 0 2.4rem;
  }

  .nav-container {
    width: 100%;
    height: 100vh;
    padding: 0 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    /*flex-grow: 1;*/

    > nav {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-top: -2.4rem;

      ul {
        width: 100%;
        list-style: none;
        margin-bottom: 3.6rem;
      }

      ul li {
        padding: 1.6rem 0;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DIVISION};
      }

      li:first-child {
        padding-top: 0;
      }

      a {
        color: ${({ theme }) => theme.COLORS.FONT_PRIMARY};
        text-decoration: none;
      }

      .active {
        font-weight: bold;
      }
    }
  }
`

export const Branding = styled.div`
  a {
    text-decoration: none;
    font-size: 6.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LOGO};
  }
`

export const Languages = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.6rem;

  button {
    padding: 0.6rem;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.FONT_PRIMARY};
    line-height: 0;
  }

  button.selected {
    border: 1px solid ${({ theme }) => theme.COLORS.FONT_PRIMARY};
  }

  button:disabled {
    filter: opacity(0.3);
    cursor: not-allowed;
  }

  img {
    width: 2.4rem;
  }
`
