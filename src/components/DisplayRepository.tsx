import '../styles/main.sass';

import Card from 'react-bootstrap/Card';
import Repository from '../models/Repository';
import { Badge } from 'react-bootstrap';
import { useThemeContext } from '../contexts/ThemeContext';

interface Props {
	repo: Repository;
}

const DisplayRepository: React.FC<Props> = ({ repo }) => {
	return (
		<Card style={{ width: '100%' }}>
			<Card.Body>
				<Card.Title className='capitalize d-flex justify-content-between'>
					<span>{repo.name}</span>
					<Badge>{repo.language}</Badge>
				</Card.Title>
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
