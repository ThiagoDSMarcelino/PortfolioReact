import { ThemeProvider } from './contexts/ThemeContexts';

import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.sass';

import Header from './components/Header';
import Footer from './components/Footer';

import ProjectPages from './views/ProjectsPage';
import HomePage from './views/HomePage';
import Page404 from './views/Page404';

function App() {
	return (
		<ThemeProvider>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/projects' element={<ProjectPages />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
