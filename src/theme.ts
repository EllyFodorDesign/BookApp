import type { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    colors: {
        primary: "", 
        primaryLighter: "",
        primaryLightest: "",
        primaryDarker: "",
        primaryDarkest: "",
        secondary: "", 
        background: "#FFFFFF", 
        foreground: "#", 
        cardsOne: "", 
        cardsTwo: "", 
        formBackground: "" ,
    },
    fontSizes: {    
        H1: "px",
        H2: "px",
        H3: "px",
        lead: "px",
        body: "px",
        button: "px",
    },
    spacing: {
        XXL: "px",
        XL: "px",
        L: "px",
        M: "px",
        S: "px",
        XS: "px",
        XXS: "px",
    },

   
    button: {
        primary: {
            color: "", // 
            backgroundColor: "", // 
            border: "", //
        },
        secondary: {  
            color: "", // 
            backgroundColor: "", // 
            border: "", // 
        },
        form: {
            color: "", // 
            background: "", //

        }
    }
} as const; //keeps the types exact


export default theme;