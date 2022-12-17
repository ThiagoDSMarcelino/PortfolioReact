import { SiLinkedin, SiGmail, SiGithub } from 'react-icons/si';
import React from 'react';

import { Nav, Contacts } from './styled';

export default function Main() {
    const iconSize = 24;

    return (
        <Nav>
            <a href='/Portfolio/'>
                <h1>Thiago S. Marcelino</h1>
            </a>
            <Contacts>
                <a href='https://www.linkedin.com/in/thiagodsmarcelino/' target="_blank" rel="noreferrer">
                    <SiLinkedin color="#007EC6" size={iconSize} />
                </a>
                <a href="mailto:thiagodsmarcelino@gmail.com?subject=Olá, Thiago! (from Website)" target="_blank" rel="noreferrer">
                    <SiGmail color="#E05D44" size={iconSize} />
                </a>
                <a href="https://github.com/ThiagoDSMarcelino" target="_blank" rel="noreferrer">
                    <SiGithub size={iconSize} />
                </a>
            </Contacts>
        </Nav>
    );
}