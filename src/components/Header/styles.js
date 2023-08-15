import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 13.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.MEDIUM_GRAY};

  padding-left: clamp(3rem, 5rem + 2vw, 15.6rem);
  padding-right: clamp(3rem, 5rem + 2vw, 15.6rem);

  position: relative;

  .nav-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    > nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 5.6rem;
    }
  }

  .mobile-only {
    display: none;
  }

  .desktop-only {
    display: block;
  }

  .hide {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    height: 11.6rem;
    padding: 5.6rem 2.4rem;

    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: block;
    }

    .hide {
      display: none;
    }

    .cursor-pointer {
      cursor: pointer;
    }

    #menu {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
    }

    .slide-in {
      animation: slide-in 700ms;
    }

    .slide-out {
      animation: slide-out 700ms;
    }

    @keyframes slide-in {
      0% {
        transform: translateX(-500px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes slide-out {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-500px);
      }
    }
  }
`

export const Branding = styled.div`
  a {
    text-decoration: none;
    font-size: 6.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
  }
`

export const Menu = styled.ul`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .active {
    font-weight: bold;
  }

  ul {
    list-style-type: none;

    display: flex;
    gap: 5.6rem;
  }
`

export const Languages = styled.div`
  display: flex;
  gap: 0.8rem;

  button {
    padding: 0.6rem;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button.selected {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
`
