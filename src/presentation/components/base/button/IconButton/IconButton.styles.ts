import styled from 'styled-components';

import { defaultTheme } from 'shared/styles/themes/default.theme';

export const Container = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  color: ${defaultTheme.colors.white};
  transition: all 0.15s ease-in;

  &:hover {
    cursor: pointer;
    color: ${defaultTheme.colors.pink};
  }

  svg {
    font-size: 2.5rem;
    align-self: center;
  }
`;
