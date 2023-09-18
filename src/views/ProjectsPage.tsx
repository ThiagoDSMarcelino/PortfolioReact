import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubService from '../services/GitHubService';
import { useEffect, useState } from 'react';
import Repository from '../models/Repository';
import DisplayRepository from '../components/DisplayRepository';

const ProjectPages: React.FC = () => {
	const [repos, setRepos] = useState<Repository[]>([]);

	useEffect(() => {
		const getData = async () => {
			try {
				GitHubService.getAllRepos().then((res) => setRepos(res));
			} catch (error) {
				console.error(error);
			}
		};

		getData();
	}, []);

	return (
		<Container>
			<Row className='justify-content-center g-3'>
				{repos.map((repo, index) => (
					<Col md={8}>
						<DisplayRepository repo={repo} key={index} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ProjectPages;
