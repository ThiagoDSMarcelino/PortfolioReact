import styled from "styled-components";

import * as colors from '../../config/colors'



export const Sla = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5vh;

`

export const About = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    gap: 5px;
`
export const Name = styled.h1`
    font-size: 2em;
`
export const AboutText = styled.p`
    font-size: 1.5em;
    text-align: justify;
`

export const ColerfullText = styled.span`
    background-image: linear-gradient(to right, ${colors.primaryColor}, ${colors.secondaryColor}, ${colors.tertiaryColor});
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
`

export const ProgressBox = styled.div`
    background-color: ${colors.secondarybackground};
    padding: 5px;
    border-radius: 15px;
    padding: 15px;
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
`

export const Progress = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5em;
`