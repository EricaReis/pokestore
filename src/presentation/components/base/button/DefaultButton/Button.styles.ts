import styled, { css } from 'styled-components';

import { type IStyledDefaultButtonProps } from './Button.types';

export const Container = styled.div`
  display: flex;
`;

export const StyledButton = styled.button<IStyledDefaultButtonProps>`
  display: flex;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20rem;
  color: ${({ theme }) => theme.colors.black};
  padding: 1rem 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.15s ease-in;
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    cursor: default;
    background-color: gray;
  }

  ${({ borderless }) =>
    borderless &&
    css`
      background-color: transparent;
      box-shadow: none;
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.pink};
      }
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.pink};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.white};
      border-radius: 1em;

      &:hover {
        background-color: transparent;
        border: 1px solid;
        border-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;
