import Button from '../common/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTableById, updateTableRequest } from '../../redux/tableRedux';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const TableForm = () => {
  const { tableId } = useParams();
  const table = useSelector((state) => getTableById(state, tableId));
  const dispatch = useDispatch();
  const allTables = useSelector((state) => state.tables);

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
        tableId,
        status,
        peopleAmount,
        maxPeopleAmount,
        bill,
      })
    );
  };

  if (!allTables.length) return <div>Loading</div>;
  if (!table && allTables.length) return <Navigate to='/' />;

  return (
    <form className='row d-flex flex-column' onSubmit={handleSubmit}>
      <h2>Table {table.id}</h2>
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
      <div className='col-3 d-inline-flex'>
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
      <Button>Update</Button>
    </form>
  );
};

export default TableForm;
