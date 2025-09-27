const theme = {
  colors: {
    primary: "#0070f3",
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
    H1: "32px",
    H2: "24px",
    H3: "20px",
    lead: "18px",
    body: "16px",
    button: "14px",
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
    form: { color: "#000", background: "#fafafa" },
  },
} as const;

export type Theme = typeof theme;
export default theme;