import styled from 'styled-components';

import { defaultTheme } from 'shared/styles/themes/default.theme';

export const Container = styled.div`
  display: flex;
  border: solid transparent;
  border-width: 2px;
  border-image-slice: 1;
  border-radius: 10%;
  border: double 1px transparent;
  background-image: linear-gradient(
      ${defaultTheme.colors.darkPurple},
      ${defaultTheme.colors.darkestPurple}
    ),
    linear-gradient(
      to right,
      ${defaultTheme.colors.magenta},
      ${defaultTheme.colors.green}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  h3 {
    color: ${defaultTheme.colors.black};
  }
`;
