import React, { useContext, useEffect, useState } from 'react';

interface ThemeData {
    theme: string;
    toggleTheme: () => void;
}

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

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const prevTheme = sessionStorage.getItem('theme');
        if (prevTheme) {
            setTheme(prevTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        sessionStorage.setItem('theme', newTheme);
    };

    const value: ThemeData = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};