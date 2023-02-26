import styled from 'styled-components';

import { defaultTheme } from 'shared/styles/themes/default.theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${defaultTheme.colors.darkestPurple};
  min-height: calc(100vh - 6rem);

  color: ${defaultTheme.colors.white};
`;
