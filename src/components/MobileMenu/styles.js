import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.DARK_GREEN};

  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  > header {
    display: flex;
    align-items: center;
    height: 11.6rem;
    padding: 0 2.4rem;
  }

  .nav-container {
    width: 100%;
    padding: 0 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    > nav {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      ul {
        width: 100%;
        list-style: none;
        margin-bottom: 3.6rem;
      }

      ul li {
        padding: 1.6rem 0;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.MEDIUM_GRAY};
      }

      li:first-child {
        padding-top: 0;
      }

      a {
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-decoration: none;
      }
    }
  }

`;

export const Branding = styled.div`
  a {
    text-decoration: none;
    font-size: 6.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
  }
`;

export const Languages = styled.div`
  display: flex;
  gap: .8rem;
  margin-bottom: 1.6rem;

  button {
    padding: .6rem;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button:active {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
`;