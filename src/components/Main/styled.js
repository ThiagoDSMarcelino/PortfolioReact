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