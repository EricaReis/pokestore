import styled, { css } from "styled-components";
import { StyledDefaultButtonProps } from "./Button.interfaces";

export const Container = styled.div`
  display: flex;
`;

export const StyledButton = styled.button<StyledDefaultButtonProps>`
  display: flex;
  border: none;
  box-sizing: border-box;
  background-color: #634d78;
  border-radius: 20rem;
  color: #f5f5f5;
  padding: 0.3rem 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    background-color: purple;
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

      &:hover {
        background-color: transparent;
        color: black;
      }
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      border: 1px solid #f5f5f5;
    `}
`;
