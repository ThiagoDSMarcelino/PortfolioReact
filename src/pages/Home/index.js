import { SiPython, SiCsharp, SiMicrosoftsqlserver, SiReact, SiScikitlearn } from 'react-icons/si';
import { FaUserCircle } from 'react-icons/fa';
import { SlBubble, SlGameController } from 'react-icons/sl';
import React from 'react';

import { ContainerHome, About, AboutText, ColerfullText, List, Item } from './styled';
import ProfilePicture from '../../styles/ProfilePicture.jpg';
import ProgressBar from './../../components/ProgressBar';

export default function Home() {
    const iconSize = 30;

    //Programming Language Colors
    const pythonColor = '#00304D';
    const csharpColor = '#662E93';
    const sqlServerColor = '#CA2321';

    //Framework Colors
    const react = '#61DBFB';

    //Skils Colors
    const scikitlearn = '#EC9C4B';


    return (
        <ContainerHome>
            <About>
                {false ? <img src={ProfilePicture} alt='nome' /> : <FaUserCircle size={180} />}
                <AboutText>
                    <span>HEY THERE, I'M</span>
                    <h2>THIAGO S. MARCELINO</h2>
                    <p>
                        A <ColerfullText>Systems Development Apprentice</ColerfullText> at Bosch enchanted by AI and Mathematics <br/>
                        I am currently studying the 1st semester of Computer Science at UTP
                    </p>
                </AboutText>
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
            </List>

            <List>
                <h2>Projects</h2>
                <Item>
                    <SiScikitlearn color={scikitlearn} size={iconSize} />
                    <h3>AI project to know music popularity, using <a href="https://github.com/ThiagoDSMarcelino/AI-Spotify" target="_blank" rel="noreferrer">Scikit-Learn</a></h3>
                </Item>
                <Item>
                    <SlGameController size={iconSize} />
                    <h3>Dungeon style game, using <a href="https://github.com/ThiagoDSMarcelino/FrogBattle" target="_blank" rel="noreferrer">Pygame</a></h3>
                </Item>
            </List>
            <List>
                <h2>Skills</h2>
                <Item>
                    <SlBubble size={iconSize} />
                    <h3>I am fluent in Portuguese and I have intermediate English</h3>
                </Item>
            </List>
        </ContainerHome>
    );
}