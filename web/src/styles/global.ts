import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme['brown-100']};
    }

    body, input, textarea, button {
        font-family: 'Lato', sans-serif;
    } 
`