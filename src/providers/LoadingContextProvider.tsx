import LoadingContext from '../contexts/LoadingContext';
import LoadingData from '../models/LoadingData';
import ProviderProps from '../models/ProviderProps';
import { useState } from 'react';

const LoadingProvider = ({ children }: ProviderProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const setLoading = (value: boolean) => {
		setIsLoading(value);
	};

	const value: LoadingData = {
		isLoading,
		setLoading,
	};

	return (
		<LoadingContext.Provider value={value}>
			{children}
		</LoadingContext.Provider>
	);
};

export default LoadingProvider;
