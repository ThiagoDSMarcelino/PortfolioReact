import { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DisplayRepository from '../components/DisplayRepository';
import GitHubService from '../services/GitHubService';
import Repository from '../models/Repository';
import Row from 'react-bootstrap/Row';
import { useLoadingContext } from '../contexts/LoadingContext';

const ProjectPages: React.FC = () => {
	const [repos, setRepos] = useState<Repository[]>([]);
	const { setLoading } = useLoadingContext();

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			try {
				const service = new GitHubService('ThiagoDSMarcelino');
				const res = await service.getAllRepos();
				setRepos(res);
			} catch (error) {
				console.error(error);
			}
			setLoading(false);
		};

		getData();
	}, []);

	return (
		<Container className='pb-3'>
			<Row className='justify-content-center g-3'>
				{repos.map((repo, i) => (
					<Col md={8} key={i}>
						<DisplayRepository repo={repo} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ProjectPages;
