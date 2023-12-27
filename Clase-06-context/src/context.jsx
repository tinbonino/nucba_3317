import { createContext } from "react";

export const themes={
    claro:{
        font: "black",
        background:"white"
    },
    oscuro:{
        font:"white",
        background:"black"
    }
};

const ThemeContext = createContext(themes.claro);

export default ThemeContext;