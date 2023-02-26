import styled from 'styled-components';

import { defaultTheme } from 'shared/styles/themes/default.theme';

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${defaultTheme.colors.darkestPurple};

  color: ${defaultTheme.colors.white};
  text-align: center;

  img {
    width: 35rem;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 3rem;
    margin: 1rem;
  }

  p {
    font-size: 1.6rem;
    margin: 0.3rem 1rem;
  }

  a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
    margin-left: 0.5rem;
  }
`;
