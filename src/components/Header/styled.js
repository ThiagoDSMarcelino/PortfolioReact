import styled from "styled-components";

import { secondaryColor, primaryColor } from '../../config/colors'

export const Nav = styled.nav`
    background: ${ primaryColor };
    padding: 20px;
    display: flex;
    justify-content: space-between;

    a {
        color: ${ secondaryColor };
        font-weight: bold;
        display: flex;
        text-decoration: none;
    }
`;

export const Contacts = styled.div`
    display: flex;
    gap: 1.25em;
    align-items: center;
`;