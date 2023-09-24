import { useEffect, useState } from 'react';

import ProviderProps from '../models/ProviderProps';
import ThemeContext from './ThemeContext';
import ThemeData from '../models/ThemeData';

const ThemeProvider = ({ children }: ProviderProps) => {
	const [isDark, setIsDark] = useState(false);
	const theme = isDark ? 'dark' : 'light';

	useEffect(() => {
		const prevTheme = sessionStorage.getItem('theme');
		if (prevTheme) {
			setIsDark(prevTheme === 'true');
		}
	}, []);

	const toggleTheme = () => {
		setIsDark((prev) => !prev);
		sessionStorage.setItem('theme', (!isDark).toString());
	};

	const value: ThemeData = {
		isDark,
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
