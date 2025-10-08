/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
// src/styled-components.d.ts
import type { CSSProp } from "styled-components";
import theme from "./theme"; // import your theme

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
