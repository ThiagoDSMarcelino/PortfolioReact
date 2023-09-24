import axios, { AxiosResponse } from 'axios';

import Repository from '../models/Repository';

class GitHubService {
	static getAllRepos = async (): Promise<Repository[]> => {
		try {
			const response: AxiosResponse = await axios.get(
				'https://api.github.com/users/ThiagoDSMarcelino/repos',
			);

			const data: Repository[] = response.data;
			const formattedData = data.map((repo) => {
				repo.name = repo.name.replace('-', ' ');
				return repo;
			});

			return formattedData;
		} catch (error) {
			throw new Error(`Error: ${error}`);
		}
	};
}

export default GitHubService;
