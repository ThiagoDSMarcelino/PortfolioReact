import styled, { createGlobalStyle } from 'styled-components';

import * as colors from '../config/colors'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: none;
        padding: 0;
        margin: 0;
    }

    body {
        background: ${ colors.primarybackground };
        font-family: sans-serif;
    }

    html, body, #root {
        height: 100%;
    }
`;

export const Container = styled.main`
    background: ${ colors.primarybackground };
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    margin: 30px auto;
    max-width: 75%;
    padding: 30px;
`;