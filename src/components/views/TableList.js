import Table from './Table';
import { useSelector } from 'react-redux';

const TableList = () => {
  const tables = useSelector((state) => state.tables);
  return (
    <>
      <h1 className='m-3'>All tables</h1>
      <ul className='list-group'>
        {tables.map((table) => (
          <Table key={table.id} {...table} />
        ))}
      </ul>
    </>
  );
};

export default TableList;
