import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Navbar from 'react-bootstrap/Navbar';
import { useThemeContext } from '../contexts/ThemeContext';

const Header: React.FC = () => {
	const { theme } = useThemeContext();

	return (
		<Navbar bg={theme} data-bs-theme={theme} expand='md' className='mb-3'>
			<Container fluid>
				<Navbar.Brand as={Link} to='/'>
					Thiago S. Marcelino
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />

				<Menu />
			</Container>
		</Navbar>
	);
};

export default Header;
