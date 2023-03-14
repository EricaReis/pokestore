import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkestPurple};
  min-height: calc(100vh - 6rem);

  color: ${({ theme }) => theme.colors.white};
`;
