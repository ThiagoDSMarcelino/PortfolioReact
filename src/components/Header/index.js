import { SiLinkedin, SiGmail, SiGithub } from 'react-icons/si';
import React from 'react';

import { Nav, Bar } from './styled';

export default function Header() {
    const iconSize = 24;

    return (
        <header>
            <Nav>
                <a href="/">
                    <h1>Thiago S. Marcelino</h1>
                </a>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/thiagodsmarcelino/" target="_blank" rel="noreferrer">
                            <SiLinkedin color="#007EC6" size={iconSize} />
                        </a>
                    </li>
                    <Bar />
                    <li>
                        <a href="mailto:thiagodsmarcelino@gmail.com?subject=Hi, Thiago! (from Website)" target="_blank" rel="noreferrer">
                            <SiGmail color="#E05D44" size={iconSize} />
                        </a>
                    </li>
                    <Bar />
                    <li>
                        <a href="https://github.com/ThiagoDSMarcelino" target="_blank" rel="noreferrer">
                            <SiGithub color={"#000000"} size={iconSize} />
                        </a>
                    </li>
                </ul>
            </Nav>
        </header>
    );
}