import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyles, { Container } from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Container>
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
