import { SiPython, SiCsharp, SiMicrosoftsqlserver } from 'react-icons/si';
import React from 'react';

import ProgressBar from './../../components/ProgressBar';
import { Progress } from './styled'

export default function Main() {
    const iconSize = 30;

    return (
        <>
            <Progress>
                <SiPython color="#00304D" size={iconSize}/><ProgressBar bgcolor={"#00304D"} completed={60} />
            </Progress>
            <Progress>
                <SiCsharp color="#662E93" size={iconSize}/><ProgressBar bgcolor={"#662E93"} completed={75} />
            </Progress>
            <Progress>
                <SiMicrosoftsqlserver color="#CA2321" size={iconSize}/><ProgressBar bgcolor={"#CA2321"} completed={30} />
            </Progress>
        </>
    );
}