import styled from "styled-components";

import { primaryColor, primarybackground } from '../../config/colors'


export const ProgressBarContainer = styled.div`
    border-radius: 50px;
    height: 30px;
    width: 100%;
`;

export const Filled= styled.div`
    width: ${ props => props.completed !== '0%' ? props.completed : '2.5em' };
    background-color: ${ props => props.color ? props.color : primaryColor };
    transition: width 1s ease-in-out;
    border-radius: inherit;
    text-align: right;
    height: 100%;
`;

export const Label = styled.span`
    color: ${ primarybackground };
    vertical-align: middle;
    display: inline-block;
    font-weight: bold;
    font-size: 1.25em;
    padding: 5px;
`;