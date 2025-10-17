import { createGlobalStyle } from "styled-components";

/**
 * Global styles consume CSS variables from variables.css.
 * This keeps tokens centralized and responsive across both
 * plain CSS and styled-components. Wraps tokens for type-safe access (theme.colors.primary → var(--color-primary)).
 *
 * Example:
 * export const GlobalStyle = createGlobalStyle`
 * body {
 *   font-family: var(--font-sans);
 *   font-size: var(--fs-body);
 *   background-color: var(--color-background);
 *   color: var(--color-foreground);
 * }
 * h1 { font-size: var(--fs-h1); }
 * `;
 *
 * Makes tokens available in styled-components without hardcoding.
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
    margin: 0;
    font-family: var(--font-sans, system-ui, sans-serif);
    font-size: var(--fs-body);
    line-height: 1.6;
    background-color: var(--color-hero-bg);
    color: var(--color-foreground);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 var(--space-m);
    color: var(--color-foreground);
  }
  h1 { font-size: var(--fs-h1); }
  h2 { font-size: var(--fs-h2); }
  h3 { font-size: var(--fs-h3); }
  h4 { font-size: var(--fs-h4); }


  p, li {
    font-size: var(--fs-p);
    line-height: 1.6;
  }

    ul, ol {
    padding-left: var(--space-l);
  }

  span, a {
    font-size: var(--fs-body); /* 16px mobile, 16px tablet, 18px desktop */
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
    H1: "var(--fs-h1)",    // 32px mobile, 36px tablet, 42px desktop
    H2: "var(--fs-h2)",    // 24px mobile, 28px tablet, 32px desktop
    H3: "var(--fs-h3)",    // 20px mobile, 22px tablet, 24px desktop
    LH1: "var(--fs-LH1)",
  LH2: "var(--fs-LH2)",
  LH3: "var(--fs-LH3)",
    lead: "var(--fs-lead)",// 18px mobile/tablet, 20px desktop
    body: "var(--fs-body)",// 16px mobile/tablet, 18px desktop
    button: "var(--fs-button)", // 14px mobile/tablet, 16px desktop
    p: "var(--fs-p)", 
    psmall:"var(--fs-psmall)",
  },
  spacing: {
    XXL: "var(--space-xxl)", // 64px
    XL: "var(--space-xl)",   // 32px
    L: "var(--space-l)",     // 24px
    M: "var(--space-m)",     // 16px
    S: "var(--space-s)",     // 8px
    XS: "var(--space-xs)",   // 4px
    XXS: "var(--space-xxs)", // 2px
  },
  radii: {
    sm: "var(--radius-sm)", // 4px
    md: "var(--radius-md)", // 8px
    lg: "var(--radius-lg)", // 12px
  },
};

export type Theme = typeof theme;
export default theme;
