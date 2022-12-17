import styled, { createGlobalStyle } from 'styled-components';

import * as colors from '../config/colors'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: ${ colors.primarybackground };
    }

    html, body, #root {
        height: 100%;
    }
`;

export const Container = styled.section`
    max-width: 75%;
    background: ${ colors.primarybackground };
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;