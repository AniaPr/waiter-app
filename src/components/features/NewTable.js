import { useDispatch, useSelector } from 'react-redux';
import { addTableRequest } from '../../redux/tableRedux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allTables = useSelector((state) => state.tables);
  console.log('all tables', allTables);
  const tablesId = allTables.map((table) => table.id);
  console.log(tablesId);

  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    if (tablesId.includes(id)) {
      alert('The table is already available');
    } else e.preventDefault();
    dispatch(addTableRequest(id));
    navigate('/');
  };

  return (
    <form className='row d-flex flex-column' onSubmit={handleSubmit}>
      <h2 className='mt-2'>Add table</h2>
      <div className='col-8 col-sm-4 col-lg-3 d-inline-flex'>
        <label className='form-label m-auto'>
          <h5>Number: </h5>
        </label>
        <input
          type='number'
          className='form-control m-2'
          min='1'
          max='10'
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </div>
      <div>
        <button className='btn btn-primary btn-sm' type='submit'>
          Add new table
        </button>
      </div>
    </form>
  );
};

export default NewTable;
