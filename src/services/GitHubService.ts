import ServiceError, { ServiceErrorType } from '../errors/ServiceErrors';
import axios, { AxiosResponse } from 'axios';

import Repository from '../models/Repository';
import stringToTime from '../utils/stringToTime';

class GitHubService {
	private username: string;

	constructor(username: string) {
		this.username = username;
	}

	public getAllRepos = async (): Promise<Repository[]> => {
		try {
			const response: AxiosResponse = await axios.get(
				`https://api.github.com/users/${this.username}/repos`,
			);

			const data: Repository[] = response.data;
			const formattedData = data
				.filter((repo) => repo.name !== this.username)
				.map((repo) => {
					repo.name = repo.name.replace(/-/g, ' ');
					return repo;
				})
				.sort(
					(a, b) =>
						stringToTime(b.updated_at) - stringToTime(a.updated_at),
				);

			return formattedData;
		} catch (error) {
			throw new ServiceError(ServiceErrorType.Connection);
		}
	};
}

export default GitHubService;
