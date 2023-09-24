import '../styles/main.sass';

import Card from 'react-bootstrap/Card';
import Repository from '../models/Repository';

interface Props {
	repo: Repository;
}

const DisplayRepository: React.FC<Props> = ({ repo }) => {
	return (
		<Card style={{ width: '100%' }}>
			<Card.Body>
				<Card.Title className='capitalize'>{repo.name}</Card.Title>
				<Card.Text>{repo.description}</Card.Text>
				<Card.Link
					href={repo.html_url}
					target='_blank'
					rel='noreferrer'
				>
					Source
				</Card.Link>
			</Card.Body>
		</Card>
	);
};

export default DisplayRepository;
