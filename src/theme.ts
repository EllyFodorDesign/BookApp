// theme.ts
const theme = {
  colors: {
    primary: "#2E6B5A", 
   primaryLight: "#7FBFA7",
   background: "#ffffffff",
    backgroundLanding: "#ffffffff",
    text: "#0B2A26",
    muted: "#6B6B6B",
    formBackground: "#fafafa",
  },
  fontSizes: {
    H1: "2.2rem", //39.6px (1rem=18px)
    H2: "1.5rem", //27px
    H3: "1.25rem",//22.5px
    lead: "1.125rem",//20.25px
    body: "1rem", //18px
    button: "15px",
    LH1: "2rem", //32 px
    LH2: "1.7rem", //
    LH3: "1.25rem", 
    Lp: "1rem",
    Lli: "1rem",
    Lul: "1rem",

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
};

export type Theme = typeof theme;
export default theme;
