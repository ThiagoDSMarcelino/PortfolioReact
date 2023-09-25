import axios, { AxiosResponse } from 'axios';

import Repository from '../models/Repository';

class GitHubService {
	static Username = 'ThiagoDSMarcelino';

	static getAllRepos = async (): Promise<Repository[]> => {
		try {
			const response: AxiosResponse = await axios.get(
				`https://api.github.com/users/${this.Username}/repos`,
			);

			const data: Repository[] = response.data;
			const formattedData = data
				.filter((repo) => repo.name !== this.Username)
				.map((repo) => {
					repo.name = repo.name.replace(/-/g, ' ');
					return repo;
				})
				.sort(
					(a, b) =>
						this.stringToDate(b.updated_at).getTime() -
						this.stringToDate(a.updated_at).getTime(),
				);

			return formattedData;
		} catch (error) {
			throw new Error(`Error: ${error}`);
		}
	};

	private static stringToDate(data: string) {
		return new Date(data);
	}
}

export default GitHubService;
