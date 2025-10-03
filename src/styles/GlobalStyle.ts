import { createGlobalStyle } from "styled-components";

/**
 * Global styles consume CSS variables from variables.css.
 * This keeps tokens centralized and responsive across both
 * plain CSS and styled-components. Wraps tokens for type-safe access (theme.colors.primary → var(--color-primary)).

Example:export const GlobalStyle = createGlobalStyle`
body {
font-family: var(--font-sans);
font-size: var(--fs-body);
background-color: var(--color-background);
color: var(--color-foreground);
}
h1 { font-size: var(--fs-h1); }
`;

Makes tokens available in styled-components without hardcoding.
 */
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-sans);
    font-size: var(--fs-body);
    background-color: var(--color-background);
    color: var(--color-foreground);
    line-height: 1.5;
  }

  h1 {
    font-size: var(--fs-h1);
  }
  h2 {
    font-size: var(--fs-h2);
  }
  h3 {
    font-size: var(--fs-h3);
  }
  p, span, a {
    font-size: var(--fs-body);
  }
`;

// Wrap tokens for type-safe access inside styled-components
const theme = {
  colors: {
    primary: "var(--color-primary)",
    primaryLighter: "var(--color-primary-lighter)",
    primaryLightest: "var(--color-primary-lightest)",
    primaryDarker: "var(--color-primary-darker)",
    primaryDarkest: "var(--color-primary-darkest)",
    secondary: "var(--color-secondary)",
    background: "var(--color-background)",
    foreground: "var(--color-foreground)",
    cardsOne: "var(--color-cards-one)",
    cardsTwo: "var(--color-cards-two)",
    formBackground: "var(--color-form-bg)",
  },
  fontSizes: {
    H1: "var(--fs-h1)",
    H2: "var(--fs-h2)",
    H3: "var(--fs-h3)",
    lead: "var(--fs-lead)",
    body: "var(--fs-body)",
    button: "var(--fs-button)",
  },
  spacing: {
    XXL: "var(--space-xxl)",
    XL: "var(--space-xl)",
    L: "var(--space-l)",
    M: "var(--space-m)",
    S: "var(--space-s)",
    XS: "var(--space-xs)",
    XXS: "var(--space-xxs)",
  },
  radii: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
  },
};

export type Theme = typeof theme;
export default theme;
