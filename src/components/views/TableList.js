import Table from './Table';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

const TableList = () => {
  const sortedTables = useSelector((state) =>
    state.tables.sort((a, b) => {
      return a.id - b.id;
    })
  );

  if (!sortedTables)
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );

  return (
    <>
      <h1 className='m-3'>All tables</h1>
      <ul className='list-group'>
        {sortedTables.map((table) => (
          <Table key={table.id} {...table} />
        ))}
      </ul>
    </>
  );
};

export default TableList;
