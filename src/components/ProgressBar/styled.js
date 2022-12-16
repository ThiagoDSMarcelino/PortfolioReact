import styled from "styled-components";

export const ProgressBarContainer = styled.div`
    height: 20px;
    width: 100%;
    background-color: "#E0E0DE";
    border-radius: 50px;
`;

export const Filled= styled.div`
    height: 100%;
    width: 80%;
    background-color: red;
    border-radius: inherit;
    text-align: right;
    transition: width 1s ease-in-out;
`;

export const Label = styled.span`
    padding: 5px;
    color: white;
    font-weight: bold;
`;