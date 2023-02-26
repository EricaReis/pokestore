import styled from 'styled-components';

import { defaultTheme } from 'shared/styles/themes/default.theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${defaultTheme.colors.darkPurple};
  height: 60px;
  align-items: center;
  padding-left: 4rem;
  padding-right: 4rem;

  img {
    width: 11rem;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ContainerIcons = styled.div`
  display: flex;
  margin-left: 4rem;
  gap: 2rem;
`;
