import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const HomePage: React.FC = () => {
	return (
		<Container>
			<Row>
				<Col md={{ span: 8, offset: 1 }}>
					<h6>HEY THERE, I'M</h6>
					<h2>THIAGO S. MARCELINO</h2>
					<p>
						A Systems Development Apprentice at Bosch enchanted by
						AI and Mathematics <br />I am currently studying the 1st
						semester of Computer Science at UTP
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
