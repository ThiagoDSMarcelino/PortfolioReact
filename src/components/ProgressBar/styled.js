import styled from "styled-components";

export const ProgressBarContainer = styled.div`
    height: 20px;
    width: 100%;
    background-color: "#E0E0DE";
    border-radius: 50px;
`;

export const Filled= styled.div`
    height: 100%;
    width: ${props => props.compled};
    background-color: ${props => props.bgcolor};
    border-radius: inherit;
    text-align: right;
    transition: width 1s ease-in-out;
`;

export const Label = styled.span`
    padding: 5px;
    color: white;
    font-weight: bold;
`;