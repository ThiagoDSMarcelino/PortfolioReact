import { Nav, Navbar, Offcanvas, Stack } from 'react-bootstrap';
import { faEnvelope, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
import NavIcon from './NavIcon';
import { useThemeContext } from '../contexts/ThemeContext';

const Menu: React.FC = () => {
	const { toggleTheme, isDark } = useThemeContext();
	const themeIcon = isDark ? faMoon : faSun;

	return (
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
					<NavIcon icon={themeIcon} onClick={toggleTheme} />

					<Nav.Link as={Link} to='/'>
						Home
					</Nav.Link>

					<Nav.Link as={Link} to='/projects'>
						Projects
					</Nav.Link>

					<Stack direction='horizontal' gap={3}>
						<NavIcon
							icon={faLinkedin}
							href='https://www.linkedin.com/in/thiagodsmarcelino/'
						/>

						<NavIcon
							icon={faEnvelope}
							href='mailto:thiagodsmarcelino@gmail.com?subject=Hi, Thiago! (from Website)'
						/>

						<NavIcon
							icon={faGithub}
							href='https://github.com/ThiagoDSMarcelino'
						/>
					</Stack>
				</Nav>
			</Offcanvas.Body>
		</Navbar.Offcanvas>
	);
};

export default Menu;
