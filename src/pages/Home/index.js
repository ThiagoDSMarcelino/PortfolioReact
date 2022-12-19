import { SiPython, SiCsharp, SiMicrosoftsqlserver, SiJavascript, SiTypescript, SiReact, SiDjango, SiAngular } from 'react-icons/si';
import React from 'react';

import { ContainerHome, Item, List, About, ColerfullText } from './styled'
import ProgressBar from './../../components/ProgressBar';

export default function Home() {
    const iconSize = 30;

    //Programming Language Colors
    const pythonColor = '#00304D';
    const csharpColor = '#662E93';
    const javaScriptColor = '#F7E018';
    const typeScriptColorColor = '#007ACC';
    const sqlServerColor = '#CA2321';

    //Framework Colors
    const react = '#61DBFB';
    const django = '#103E2E';
    const angular = '#DD0031';

    return (
        <ContainerHome>
            <About>
                <span>HEY THERE, I'M</span>
                <h2>THIAGO S. MARCELINO</h2>
                <p>
                    A <ColerfullText>Systems Development</ColerfullText> apprentice at Bosch enchanted by AI and Mathematics <br/>
                    I am currently studying the 1st semester of Computer Science at UTP
                </p>
            </About>

            <List>
                <h2>Main Programming Languages</h2>
                <Item>
                    <SiPython color={pythonColor} size={iconSize} />
                    <ProgressBar bgcolor={pythonColor} completed={'60%'} />
                </Item>
                <Item>
                    <SiCsharp color={csharpColor} size={iconSize} />
                    <ProgressBar bgcolor={csharpColor} completed={'75%'} />
                </Item>
                <Item>
                    <SiJavascript color={javaScriptColor} size={iconSize} />
                    <ProgressBar bgcolor={javaScriptColor} completed={'45%'} />
                </Item>
                <Item>
                    <SiTypescript color={typeScriptColorColor} size={iconSize} />
                    <ProgressBar bgcolor={typeScriptColorColor} completed={'20%'} />
                </Item>
                <Item>
                    <SiMicrosoftsqlserver color={sqlServerColor} size={iconSize} />
                    <ProgressBar bgcolor={sqlServerColor} completed={'30%'} />
                </Item>
            </List>

            <List>
                <h2>Main Frameworks</h2>
                <Item>
                    <SiReact color={react} size={iconSize} />
                    <ProgressBar bgcolor={react} completed={'35%'} />
                </Item>
                <Item>
                    <SiDjango color={django} size={iconSize} />
                    <ProgressBar bgcolor={django} completed={'20%'} />
                </Item>
                <Item>
                    <SiAngular color={angular} size={iconSize} />
                    <ProgressBar bgcolor={angular} completed={'0%'} />
                </Item>
            </List>
        </ContainerHome>
    );
}