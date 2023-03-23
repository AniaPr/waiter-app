import Table from './Table';
import { useSelector } from 'react-redux';

const TableList = () => {
  const tables = useSelector((state) => state.tables);
  console.log(tables);
  return (
    <>
      <h1 className='m-3'>All tables</h1>
      <ul className='list-group'>
        {tables.map((table) => (
          <Table key={table.id} id={table.id} status={table.status} />
        ))}
      </ul>
    </>
  );
};

export default TableList;