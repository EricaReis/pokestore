import styled from 'styled-components';

import { defaultTheme } from 'shared/styles/themes/default.theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${defaultTheme.colors.darkestPurple};
  min-height: calc(100vh - 6rem);
`;

export const ContainerPokemon = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 32%;
`;
