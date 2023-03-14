import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.15s ease-in;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.pink};
    transform: scale(1.1);
  }

  svg {
    font-size: 2.5rem;
    align-self: center;
  }
`;
