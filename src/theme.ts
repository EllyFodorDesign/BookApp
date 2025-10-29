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
   buttonBackground: "#757575ff",
    
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

fontWeight: {
  thin: "var(fw-thin)",
  ultralight: "var(fw-ultralight)",
  light: "var(--fw-light)",
  normal: "var(--fw-normal)",
    semibold: "var(--fw-semibold)",
  bold: "var(--fw-bold)",
   heavy: "var(--fw-heavy)",
    black: "var(--fw-black)",


},

sizes: {
  XXS: "200px",
  XS: "240px",
  SMALLS: "300px",
  S: "320px",
  M: "480px",
  L: "650px",
  XL: "800px",

},
forms:{
  /*forms*/
small: "12rem", 
medium: "12rem",
large: "12rem",


},

scale:{
 
small: 1, 
medium: 1.1,
large: 1.2,


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
    SM: "var(--radius-sm)",
    MD: "var(--radius-md)",
    LG: "var(--radius-lg)",
  },
};

export type Theme = typeof theme;
export default theme;
