import { createGlobalStyle } from "styled-components";
import MediaQuery from "./mediaQuery";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  /* Typography scale variables */
  :root {
    --fs-xs: 0.75rem;   /* 12px */
    --fs-sm: 0.875rem;  /* 14px */
    --fs-base: 1rem;    /* 16px */
    --fs-md: 1.125rem;  /* 18px */
    --fs-lg: 1.25rem;   /* 20px */
    --fs-xl: 1.5rem;    /* 24px */
    --fs-xxl: 2rem;     /* 32px */
  }

  /* Tablet adjustments */
  ${MediaQuery.tablet} {
    :root {
      --fs-base: 1.125rem; /* 18px */
      --fs-md: 1.25rem;    /* 20px */
      --fs-lg: 1.5rem;     /* 24px */
      --fs-xl: 1.75rem;    /* 28px */
      --fs-xxl: 2.25rem;   /* 36px */
    }
  }

  /* Desktop adjustments */
  ${MediaQuery.desktop} {
    :root {
      --fs-base: 1.25rem;  /* 20px */
      --fs-md: 1.375rem;   /* 22px */
      --fs-lg: 1.75rem;    /* 28px */
      --fs-xl: 2rem;       /* 32px */
      --fs-xxl: 2.5rem;    /* 40px */
    }
  }

  body {
    font-size: var(--fs-base);
    line-height: 1.5;
    font-family: system-ui, sans-serif;
    color: black;
    background-color: white;
  }

  h1 {
    font-size: var(--fs-xxl);
  }

  h2 {
    font-size: var(--fs-xl);
  }

  h3 {
    font-size: var(--fs-lg);
  }

  p {
    font-size: var(--fs-base);
  }
`;
