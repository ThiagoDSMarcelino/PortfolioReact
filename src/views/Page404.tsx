import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Page404: React.FC = () => {
	return (
		<Container>
			<Row>
				<Col className='text-center h1'>Page not found</Col>
			</Row>
		</Container>
	);
};

export default Page404;
