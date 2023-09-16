import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Page404() {
    return (
        <Container>
            <Row>
                <Col className='text-center h1'>
                    Page not found
                </Col>
            </Row>
        </Container>
    );
}

export default Page404;