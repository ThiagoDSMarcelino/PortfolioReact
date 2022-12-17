import { SiPython, SiCsharp, SiMicrosoftsqlserver, SiJavascript, SiTypescript, SiReact, SiDjango, SiAngular } from 'react-icons/si';
import React from 'react';

import { Progress, ProgressBox, Name, About, AboutText, ColerfullText } from './styled'
import ProgressBar from './../../components/ProgressBar';

export default function Main() {
    const iconSize = 30;

    //Programming Language Colors
    const pythonColor = "#00304D";
    const csharpColor = "#662E93";
    const javaScriptColor = "#F7E018";
    const typeScriptColorColor = "#007ACC";
    const sqlServerColor = "#CA2321";

    //Framework Colors
    const react = "#61DBFB";
    const django = "#103E2E";
    const angular = "#DD0031";

    const nbsp = "\u00A0";
    
    return (
        <>
            <About>
                <span>HEY THERE, I'M</span>
                <Name>THIAGO S. MARCELINO</Name>
                <AboutText>
                    A Systems Development apprentice at Bosch enchanted by AI and Mathematics <br/>
                    I am currently studying the 1st semester of Computer Science at UTP
                </AboutText>
            </About>

            <ProgressBox>
                <h2>Main Programming Languages</h2>
                <Progress>
                    <SiPython color={pythonColor} size={iconSize}/><ProgressBar bgcolor={pythonColor} completed={"60%"} />
                </Progress>
                <Progress>
                    <SiCsharp color={csharpColor} size={iconSize}/><ProgressBar bgcolor={csharpColor} completed={"75%"} />
                </Progress>
                <Progress>
                    <SiJavascript color={javaScriptColor} size={iconSize}/><ProgressBar bgcolor={javaScriptColor} completed={"45%"} />
                </Progress>
                <Progress>
                    <SiTypescript color={typeScriptColorColor} size={iconSize}/><ProgressBar bgcolor={typeScriptColorColor} completed={"20%"} />
                </Progress>
                <Progress>
                    <SiMicrosoftsqlserver color={sqlServerColor} size={iconSize}/><ProgressBar bgcolor={sqlServerColor} completed={"30%"} />
                </Progress>
            </ProgressBox>

            <ProgressBox>
                <h2>Main Frameworks</h2>
                <Progress>
                    <SiReact color={react} size={iconSize}/><ProgressBar bgcolor={react} completed={"35%"} />
                </Progress>
                <Progress>
                    <SiDjango color={django} size={iconSize}/><ProgressBar bgcolor={django} completed={"20%"} />
                </Progress>
                <Progress>
                    <SiAngular color={angular} size={iconSize}/><ProgressBar bgcolor={angular} completed={"0%"} />
                </Progress>
            </ProgressBox>
        </>
    );
}