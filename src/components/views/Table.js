import Button from '../common/Button';

const Table = ({ id, status }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <div className='d-inline-flex'>
        <h2 className='m-auto '>Table {id}</h2>
        <p className='m-auto ps-3'>
          <strong>Status:</strong> {status}
        </p>
      </div>
      <Button id={id}>Show more</Button>
    </li>
  );
};

export default Table;
