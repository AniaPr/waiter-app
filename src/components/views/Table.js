import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeTableRequest } from '../../redux/tableRedux';

const Table = ({ id, status }) => {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(removeTableRequest(id));
  };

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <div className='d-inline-flex'>
        <h2 className='m-auto '>Table {id}</h2>
        <p className='m-auto ps-3'>
          <strong>Status:</strong> {status}
        </p>
      </div>
      <div>
        <Link to={`/table/${id}`}>
          <button className='btn btn-primary me-2' type='button'>
            Show more
          </button>
        </Link>
        <button
          className='btn btn-primary'
          type='button'
          onClick={clickHandler}>
          Remove table
        </button>
      </div>
    </li>
  );
};

export default Table;
