import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 13.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid ${({ theme }) => theme.COLORS.MEDIUM_GRAY};

  padding-left: clamp(3rem, 5rem + 2vw, 15.6rem);
  padding-right: clamp(3rem, 5rem + 2vw, 15.6rem);

  @media only screen and (max-width: 768px) {
    height: 11.6rem;
    padding: 0 2.4rem;

    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-size: 1.2rem;
  }
`;

export const Social = styled.div`
  display: flex;
  gap: 2.4rem;
`;