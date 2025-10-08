// theme.ts
const theme = {
  colors: {
    primary: "#2E6B5A", 
    primaryLighter: "#3291ff",
    primaryLightest: "#cffafe",
    primaryDarker: "#0369a1",
    primaryDarkest: "#012e40",
    secondary: "#1DB954",
    background: "#FFFFFF",
    foreground: "#000000",
    cardsOne: "#f5f5f5",
    cardsTwo: "#e0e0e0",
    formBackground: "#fafafa",
  },
  fontSizes: {
    H1: "2.2rem",
    H2: "1.5rem",
    H3: "1.25rem",
    lead: "1.125rem",
    body: "1rem",
    button: "15px",
  },
  spacing: {
    XXL: "64px",
    XL: "32px",
    L: "24px",
    M: "16px",
    S: "8px",
    XS: "4px",
    XXS: "2px",
  },
  button: {
    primary: { color: "#fff", backgroundColor: "#0070f3", border: "none" },
    secondary: { color: "#fff", backgroundColor: "#1DB954", border: "none" },
    form: { color: "#000", backgroundColor: "#fafafa", border: "1px solid #ccc" } // <-- consistent keys
  }


} as const;

export type Theme = typeof theme;
export default theme;
