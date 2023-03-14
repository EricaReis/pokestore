import { type defaultTheme } from 'shared/styles/themes/default.theme';

import 'styled-components';

declare module 'styled-components' {
  type ThemeType = typeof defaultTheme;

  export interface IDefaultTheme extends ThemeType {}
}
