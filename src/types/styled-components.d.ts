// styled-components.d.ts
import "styled-components";
import type theme from "../theme"; // import the default export object

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

// (optional) Add CSS prop support for React
declare module "react" {
  interface DOMAttributes<T> {
    css?: import("styled-components").CSSProp;
  }
}
