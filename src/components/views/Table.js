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
    <li className='list-group-item d-flex flex-column flex-sm-row justify-content-sm-between'>
      <div className='d-sm-inline-flex'>
        <h2 className='my-sm-auto text-center'>Table {id}</h2>
        <p className='my-sm-auto ms-sm-2 text-center'>
          <strong>Status:</strong> {status}
        </p>
      </div>
      <div className='gap-1 col-6 mx-auto d-block d-sm-flex me-sm-0 flex-sm-row justify-content-sm-end text-center'>
        <Link to={`/table/${id}`}>
          <button
            className='btn btn-primary d-block btn-sm mx-auto mb-1 mb-sm-0 h-100'
            type='button'>
            Show more
          </button>
        </Link>
        <button
          className='btn btn-primary btn-sm d-block mx-auto m-sm-0'
          type='button'
          onClick={clickHandler}>
          Remove table
        </button>
      </div>
    </li>
  );
};

export default Table;
