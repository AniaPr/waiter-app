import Button from '../common/Button';

const Table = () => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <div className='d-inline-flex'>
        <h2 className='m-auto '>Table </h2>
        <p className='m-auto ps-3'>Status: </p>
      </div>
      <Button>Show more</Button>
    </li>
  );
};

export default Table;
