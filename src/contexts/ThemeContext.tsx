import React, { useContext } from 'react';

import ThemeData from '../models/ThemeData';

const ThemeContext = React.createContext<ThemeData | undefined>(undefined);
ThemeContext.displayName = 'Theme';

export const useThemeContext = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error(
			'useThemeContext must be used inside a ThemeContext.Provider',
		);
	}

	return context;
};

export default ThemeContext;
