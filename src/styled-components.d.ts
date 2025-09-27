/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";
import { Theme } from "./theme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    css?: import("styled-components").CSSProp;
  }
}
/* eslint-enable @typescript-eslint/no-empty-interface */