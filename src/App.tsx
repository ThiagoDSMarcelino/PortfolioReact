import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.sass';

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './views/HomePage';
import LoadingOverlay from './components/LoadingOverlay';
import LoadingProvider from './providers/LoadingContextProvider';
import Page404 from './views/Page404';
import ProjectPages from './views/ProjectsPage';
import React from 'react';
import ThemeProvider from './providers/ThemeContextProvider';

const App: React.FC = () => {
	return (
		<LoadingProvider>
			<ThemeProvider>
				<LoadingOverlay />
				<NavBar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/projects' element={<ProjectPages />} />
					<Route path='*' element={<Page404 />} />
				</Routes>
			</ThemeProvider>
		</LoadingProvider>
	);
};

export default App;
