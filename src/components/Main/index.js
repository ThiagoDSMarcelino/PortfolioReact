import React from 'react';
import { Nav } from './styled';

export default function Header() {
    return (
        <Nav>
            <a href='index.html'>
                <h1>Thiago S. Marcelino</h1>
            </a>
            <div className='buttons'>
                <a>
                    <h2>Sla</h2>
                </a>
            </div>
        </Nav>
    );
}