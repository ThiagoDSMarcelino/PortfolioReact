import styled from "styled-components";

export const ProgressBarContainer = styled.div`
    height: 30px;
    width: 100%;
    border-radius: 50px;
`;

export const Filled= styled.div`
    height: 100%;
    width: ${props => props.completed !== "0%" ? props.completed : "2.5em"};
    background-color: ${props => props.color ? props.color : "darkblue"};
    border-radius: inherit;
    text-align: right;
    transition: width 1s ease-in-out;
`;

export const Label = styled.span`
    padding: 5px;
    color: white;
    font-weight: bold;
    font-size: 1.25em;
    display: inline-block;
    vertical-align: middle;
`;