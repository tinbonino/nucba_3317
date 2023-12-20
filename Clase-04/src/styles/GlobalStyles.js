import {createGlobalStyle} from "styled-components";

export const GlobalStyles=createGlobalStyle`

    :root {
        --orange-bg: #2f2618;
        --orange: #ff9d01;
        --magenta: #ff005c;
        --gray-bg: #2b2b2c;
        --btn-gradient: linear-gradient(82deg,#ffa100, #fb103d);
        --btn-gradient-secondary: linear-gradient(140deg,#3b3022, #3b2329);
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #131415;
        font-family: "Montserrat",sans-serif;
        color: white;
        overflow-x:hidden;
    }

    a {
        text-decoration: none;
        color: white;
    }
    a:visited {
        color: white;
    }
    li {
        list-style: none;
    }
`;