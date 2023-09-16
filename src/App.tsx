import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Page404 from './views/Page404';
import HomePage from './views/HomePage';
import ProjectPages from './views/ProjectsPage';
import { ThemeProvider } from './contexts/ThemeContexts';

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