/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import type { CSSProp } from "styled-components";
import theme from './theme';

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}