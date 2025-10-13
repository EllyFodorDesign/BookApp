// theme.ts
const theme = {
  colors: {
    primary: "#000000ff", 
   primaryLightest: "#fae8d7ff",
   cardBackground: "#f7ecdcff",
   background: "#ffffffff",
    text: "#0B2A26",
    muted: "#fae8d7ff",
    formBackground: "#fcfaf1ff",
    landing: "#96723cff",
    landingDarker: "rgba(93, 69, 35, 1)",
   heroBackground: "#fbdbc0ff",
    
  },
  fontSizes: {
  H1: "var(--fs-h1)",
  H2: "var(--fs-h2)",
  H3: "var(--fs-h3)",
  LH1: "var(--fs-h1)",  // you can alias these for mobile versions
  LH2: "var(--fs-h2)",
  LH3: "var(--fs-h3)",
  lead: "var(--fs-lead)",
  body: "var(--fs-body)",
  small: "var(--fs-small)",
  Lp: "var(--fs-body)",
  li: "var(--fs-li)",
  Lul: "var(--fs-lul)",
  button: "var(--fs-button)",
  p: "var(--fs-p)",
  psmall: "var(--fs-psmall)",
},

sizes: {
  XS: "240px",
  S: "320px",
  M: "480px",
  L: "650px",
  XL: "800px",

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
    SM: "var(--radius-SM)",
    MD: "var(--radius-MD)",
    LG: "var(--radius-LG)",
  },
};

export type Theme = typeof theme;
export default theme;
