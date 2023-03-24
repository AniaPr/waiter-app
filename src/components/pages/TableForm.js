import Button from '../common/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTableById } from '../../redux/tableRedux';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const TableForm = () => {
  const { tableId } = useParams();
  const table = useSelector((state) => getTableById(state, tableId));

  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setBill] = useState(table.bill);

  useEffect(() => {
    if (status === 'Busy') setBill(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bill]);

  useEffect(() => {
    if (status === 'Cleaning' || status === 'Free') setPeopleAmount(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const amount = (e) => {
    if (e.target.value >= 0 && e.target.value <= 10) {
      setPeopleAmount(e.target.value);
    } else if (peopleAmount > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    }
  };

  const maxAmount = (e) => {
    if (e.target.value >= 0 && e.target.value <= 10)
      setMaxPeopleAmount(e.target.value);
  };

  if (!table) return <Navigate to='/' />;

  return (
    <form className='row d-flex flex-column'>
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
          type='text'
          className='form-control m-2'
          value={peopleAmount}
          onChange={amount}
        />
        <span className='m-auto'>/</span>
        <input
          type='text'
          className='form-control m-2'
          value={maxPeopleAmount}
          onChange={maxAmount}
        />
      </div>
      <div className='col-3 d-inline-flex'>
        <label className='form-label m-auto'>
          <h5 className='me-3'>Bill: </h5>
        </label>
        <span className='m-auto'>$</span>
        <input
          type='text'
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
