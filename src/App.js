import Header from './components/views/Header';
import Footer from './components/views/Footer';
import TableList from './components/views/TableList';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/views/NotFound';
import TableForm from './components/features/TableForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tableRedux';
import NewTable from './components/features/NewTable';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<TableList />} />
        <Route path='/table/:id' element={<TableForm />} />
        <Route path='/table/addtable' element={<NewTable />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};
export default App;
