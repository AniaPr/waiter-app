import { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTableById, updateTableRequest } from '../../redux/tableRedux';

const TableForm = () => {
  const { id } = useParams();
  const table = useSelector((state) => getTableById(state, id));
  const dispatch = useDispatch();
  const allTables = useSelector((state) => state.tables);
  const navigate = useNavigate();

  const [status, setStatus] = useState(table?.status ?? '');
  const [peopleAmount, setPeopleAmount] = useState(table?.peopleAmount ?? 0);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    table?.maxPeopleAmount ?? 0
  );
  const [bill, setBill] = useState(table?.bill ?? 0);

  useEffect(() => {
    if (status === 'Cleaning' || status === 'Free') setPeopleAmount(0);
    else if (status === 'Busy') setBill(0);
  }, [status]);

  useEffect(() => {
    if (peopleAmount > maxPeopleAmount) setPeopleAmount(maxPeopleAmount);
  }, [peopleAmount, maxPeopleAmount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTableRequest({
        id,
        status,
        peopleAmount,
        maxPeopleAmount,
        bill,
      })
    );
    navigate('/');
  };

  if (!allTables.length) return <h2>Loading...</h2>;
  if (!table && allTables.length) return <Navigate to='/' />;

  return (
    <form
      className='col-12 col-sm-6 col-md-4 d-flex flex-column'
      onSubmit={handleSubmit}>
      <h2 className='mt-2'>Table {table.id}</h2>
      <div className='d-inline-flex'>
        <label className='form-label m-auto'>
          <h5 className='mb-0'>Status: </h5>
        </label>
        <select
          className='form-select ms-2'
          value={status}
          onChange={(e) => setStatus(e.target.value)}>
          <option>Free</option>
          <option>Busy</option>
          <option>Reserved</option>
          <option>Cleaning</option>
        </select>
      </div>
      <div className='d-inline-flex'>
        <label className='form-label m-auto'>
          <h5 className='mb-0'>People: </h5>
        </label>
        <input
          type='number'
          className='form-control ms-2 my-2'
          min='0'
          max={maxPeopleAmount}
          value={peopleAmount}
          onChange={(e) => setPeopleAmount(e.target.value)}
        />
        <span className='mx-2 my-auto'>/</span>
        <input
          type='number'
          className='form-control my-2'
          min='0'
          max='10'
          value={maxPeopleAmount}
          onChange={(e) => setMaxPeopleAmount(e.target.value)}
        />
      </div>
      <div className={status !== 'Busy' ? 'visually-hidden' : 'd-inline-flex'}>
        <label className='form-label m-auto'>
          <h5 className='mb-0 me-2'>Bill: </h5>
        </label>
        <div className='input-group-prepend'>
          <span className='input-group-text rounded-0 rounded-start border-end-0'>
            $
          </span>
        </div>
        <input
          type='number'
          className='form-control form-control-sm rounded-0 rounded-end border-start-0'
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
      <div>
        <button className='btn btn-primary mt-2 btn-sm' type='sumbit'>
          Update
        </button>
      </div>
    </form>
  );
};

export default TableForm;
