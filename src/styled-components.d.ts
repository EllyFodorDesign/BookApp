/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";
import { Theme } from "./theme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {
    fontSizes: {
       H1: string;
    H2: string;
    H3: string;
    lead: string;
    body: string;
    button: string;
  };
  colors: {
    primary: string;
    primaryLighter: string;
    primaryLightest: string;
    primaryDarker: string;
    primaryDarkest: string;
    secondary: string;
    background: string;
    foreground: string;
    cardsOne: string;
    cardsTwo: string;
    formBackground: string;
  };
  spacing: {
    XXL: string;
    XL: string;
    L: string;
    M: string;
    S: string;
    XS: string;
    XXS: string;
  };
  button: {
    primary: { color: string; backgroundColor: string; border: string };
    secondary: { color: string; backgroundColor: string; border: string };
    form: { color: string; background: string };
  };
  }
}

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    css?: import("styled-components").CSSProp;
  }
}
/* eslint-enable @typescript-eslint/no-empty-interface */