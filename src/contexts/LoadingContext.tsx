import React, { useContext } from 'react';

import LoadingData from '../models/LoadingData';

const LoadingContext = React.createContext<LoadingData | undefined>(undefined);
LoadingContext.displayName = 'Theme';

export const useLoadingContext = () => {
	const context = useContext(LoadingContext);

	if (!context) {
		throw new Error(
			'useLoadingContext must be used inside a LoadingContext.Provider',
		);
	}

	return context;
};

export default LoadingContext;
