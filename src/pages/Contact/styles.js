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

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  padding: 1.6rem 2.4rem;
  margin-bottom: 3.6rem;

  display: flex;
  align-items: center;
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 20rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  padding: 1.6rem 2.4rem;
  margin-bottom: 3.6rem;
`

export const Button = styled.button`
  width: 22.8rem;
  height: 5.6rem;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.MEDIUM_GREEN};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.MEDIUM_GREEN};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
`
