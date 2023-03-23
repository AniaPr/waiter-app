import Header from './components/views/Header';
import Footer from './components/views/Footer';
import TableList from './components/views/TableList';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/views/NotFound';
import TableForm from './components/pages/TableForm';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<TableList />} />
        <Route path='/table/:id' element={<TableForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};
export default App;
