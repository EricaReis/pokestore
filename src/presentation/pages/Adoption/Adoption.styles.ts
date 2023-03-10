import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkestPurple};
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
