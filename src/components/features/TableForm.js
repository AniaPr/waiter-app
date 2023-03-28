import { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTableById, updateTableRequest } from '../../redux/tableRedux';
import clsx from 'clsx';

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
    <form className='row d-flex flex-column' onSubmit={handleSubmit}>
      <h2 className='mt-2'>Table {table.id}</h2>
      <div className='col-4 d-inline-flex'>
        <label className='form-label m-auto'>
          <h5>Status: </h5>
        </label>
        <select
          className='form-select m-2'
          value={status}
          onChange={(e) => setStatus(e.target.value)}>
          <option>Free</option>
          <option>Busy</option>
          <option>Reserved</option>
          <option>Cleaning</option>
        </select>
      </div>
      <div className='col-4 d-inline-flex'>
        <label className='form-label m-auto'>
          <h5>People: </h5>
        </label>
        <input
          type='number'
          className='form-control m-2'
          min='0'
          max={maxPeopleAmount}
          value={peopleAmount}
          onChange={(e) => setPeopleAmount(e.target.value)}
        />
        <span className='m-auto'>/</span>
        <input
          type='number'
          className='form-control m-2'
          min='0'
          max='10'
          value={maxPeopleAmount}
          onChange={(e) => setMaxPeopleAmount(e.target.value)}
        />
      </div>
      <div
        className={clsx(
          'col-3',
          status !== 'Busy' ? 'visually-hidden' : 'd-inline-flex'
        )}>
        <label className='form-label m-auto'>
          <h5 className='me-3'>Bill: </h5>
        </label>
        <span className='m-auto'>$</span>
        <input
          type='number'
          className='form-control m-2'
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
      <div>
        <button className='btn btn-primary mt-2' type='sumbit'>
          Update
        </button>
      </div>
    </form>
  );
};

export default TableForm;
