import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 13.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DIVISION};

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

  @media only screen and (max-width: 900px) {
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
  }
`

export const MobileMenuButton = styled.button`
  display: none;

  border: 0;
  background: none;
  color: ${({ theme }) => theme.COLORS.FONT_PRIMARY};
  line-height: 0;

  @media only screen and (max-width: 900px) {
    display: block;
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

export const Menu = styled.ul`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.FONT_PRIMARY};
  }

  .active {
    font-weight: bold;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.FONT_PRIMARY};
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
