import { useDispatch, useSelector } from 'react-redux';
import { addTableRequest } from '../../redux/tableRedux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allTables = useSelector((state) => state.tables);
  console.log('all tables', allTables);
  const id = allTables.map((table) => table.id);
  console.log(id);

  const [tableId, setTableId] = useState('');

  const handleSubmit = (e) => {
    if (tableId in allTables) {
      alert('it is already available');
    } else e.preventDefault();
    dispatch(addTableRequest(tableId));
    navigate('/');
  };

  return (
    <form className='row d-flex flex-column' onSubmit={handleSubmit} novalidate>
      <h2 className='mt-2'>Table</h2>
      <div className='col-4 d-inline-flex'>
        <label className='form-label m-auto'>
          <h5>Number: </h5>
        </label>
        <input
          type='number'
          className='form-control m-2'
          min='1'
          max='10'
          value={tableId}
          onChange={(e) => setTableId(e.target.value)}
          required
        />
        <div className='invalid-feedback'>The table is already available!</div>
      </div>
      <div>
        <button className='btn btn-primary' type='submit'>
          Add new table
        </button>
      </div>
    </form>
  );
};

export default NewTable;
