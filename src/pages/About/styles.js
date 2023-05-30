import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  .container {
    max-width: 1440px;
    margin: auto;
  }

  .section-title {
    padding-left: clamp(3rem, 5rem + 2vw, 15.6rem);
    margin-bottom: 5.6rem;
  }

  > section {
    margin-bottom: 6rem;
  }

  .slideshow-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_GREEN};
    border-top: 1px solid ${({ theme }) => theme.COLORS.MEDIUM_GRAY};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.MEDIUM_GRAY};
  }

  .swiper-container {
    width: 1024px;
    padding: 2.8rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slide-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
  }
  
  .slide-container img {
    width: 12rem;
    height: 12rem;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;

    .container {
    max-width: 100%;
    margin: auto;
    }

    .section-title {
      padding: 0 2.4rem;
      margin-bottom: 3.2rem;
    }

    .swiper-container {
      width: 100%;
      padding: 2.8rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }

    .slide-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.6rem;
    }

    .slide-container img {
      width: 5.6rem;
      height: 5.6rem;
    }
  }
`;

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

  .top-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: left;
    gap: 3.2rem;
  }

  .top-container-text {
    display: flex;
    gap: 2.4rem;
  }

  .top-container p {
    line-height: 3.6rem;
  }
  
  .about-img {
    width: 12.4rem;
    height: 12.4rem;
    border-radius: 50%;
  }

  .middle-container {
    line-height: 2.1rem;
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.YELLOW};
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 2.4rem;
    margin: 3.6rem auto;
  }

  .top-container {
    display: flex;
    flex-direction: column;
  }
`;