import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;

        //1920 and UP - Full HD
        font-size: 10px;

        //1600px
        @media screen and (max-width: 1600px) {
            font-size: 9.5px;
        }

        //1440px
        @media screen and (max-width: 1440px) {
            font-size: 9.5px;
        }

        //1336px and Below - HD
        @media screen and (max-width: 1336px) {
            font-size: 9px;
        }
    }

        body, input, button, textarea {
            font-family: 'Inter', 'Ubuntu', Arial, Helvetica, sans-serif;
            font-style: normal;
            font-weight: 400;
        }

        a {
            text-decoration: none;
        }

        ul {
            list-style: none;
        }

        button {
            cursor: pointer;
        }

        table {
            border-collapse: collapse;
        }
`;

export default GlobalStyles;
