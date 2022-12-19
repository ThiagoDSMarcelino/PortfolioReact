import styled from 'styled-components';

import { Container } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';



export const ContainerHome = styled(Container)`
    flex-direction: column;
    display: flex;
    gap: 2.5vh;
`

export const About = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;

    img {
        border-radius: 50%;
        height: 180px;
        width: 180px;
    }
`

export const AboutText = styled.div`
    flex-direction: column;
    font-weight: bold;
    display: flex;
    gap: 5px;

    h2 { font-size: 1.75em; }

    p { font-size: 1.5em; }
`

export const ColerfullText = styled.span`
    background-image: linear-gradient(to right, ${ colors.primaryColor }, ${ colors.secondaryColor }, ${ colors.tertiaryColor });
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
`

export const List = styled.ul`
    background-color: ${ colors.secondarybackground };
    flex-direction: column;
    border-radius: 15px;
    display: flex;
    padding: 15px;
    gap: 1.5rem;
`

export const Item = styled.li`
    align-items: center;
    display: flex;
    gap: 1.5em;

    h3 a {
        color: ${ colors.secondaryColor };
        text-decoration: none;
    }
`