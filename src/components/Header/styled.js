import styled from "styled-components";

import { primarybackground, primaryColor } from '../../config/colors'

export const Nav = styled.nav`
    justify-content: space-between;
    background: ${ primaryColor };
    padding: 20px;
    display: flex;

    a {
        color: ${ primarybackground };
        text-decoration: none;
        font-weight: bold;
        display: flex;
    }
     
    h1 { font-size: 1.75em; }

    ul {
        background-color: white;
        justify-content: center;
        list-style-type: none;
        align-items: center;
        border-radius: 5px;
        display: flex;
        padding: 5px;
        gap: 1.25em;
    }
`;

export const Sla = styled.span`
    height: calc(100% + 10px);
    border: 1px solid black;
    margin: 0 -10.5px;
`