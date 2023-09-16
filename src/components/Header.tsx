import { faEnvelope, faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useThemeContext } from '../contexts/ThemeContexts';

import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack'
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

function Header() {
    const { toggleTheme, theme } = useThemeContext();
    const themeIcon = theme === 'light' ? faSun : faMoon;

    return (
        <Navbar bg={theme} data-bs-theme={theme} expand='md' className='mb-3'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    Thiago S. Marcelino
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />

                <Navbar.Offcanvas
                    id='offcanvasNavbar-expand-md'
                    aria-labelledby='offcanvasNavbarLabel-expand-md'
                    placement='end'
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className='justify-content-end flex-grow-1 pe-3'>
                            <Nav.Link as={Link} to='/'>
                                Home
                            </Nav.Link>

                            <Nav.Link as={Link} to='/projects'>
                                Projects
                            </Nav.Link>

                            <div className='vr' />

                            <Stack direction='horizontal' className='mx-3' gap={3} >

                                <Nav.Link onClick={toggleTheme}>
                                    <FontAwesomeIcon icon={themeIcon} size='lg' />
                                </Nav.Link>

                                <Nav.Link href='https://www.linkedin.com/in/thiagodsmarcelino/' target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon icon={faLinkedin} size='lg' />
                                </Nav.Link>

                                <Nav.Link href='mailto:thiagodsmarcelino@gmail.com?subject=Hi, Thiago! (from Website)' target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon icon={faEnvelope} size='lg' />
                                </Nav.Link>

                                <Nav.Link href='https://github.com/ThiagoDSMarcelino' target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon icon={faGithub} size='lg' />
                                </Nav.Link>
                            </Stack>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;