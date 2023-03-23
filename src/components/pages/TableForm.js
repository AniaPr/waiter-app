import Button from '../common/Button';

const TableForm = () => {
  return (
    <form className='row d-flex flex-column'>
      <h2>Table</h2>
      <div className='col-4 d-inline-flex'>
        <label for='inputStatus' className='form-label m-auto'>
          <h5>Status: </h5>
        </label>
        <select id='inputStatus' className='form-select m-2'>
          <option>Free</option>
          <option>Busy</option>
          <option>Reserved</option>
          <option>Cleaning</option>
        </select>
      </div>
      <div className='col-3 d-inline-flex'>
        <label for='inputPeople' className='form-label m-auto'>
          <h5>People: </h5>
        </label>
        <input type='text' className='form-control m-2' id='inputPeople' />
        <span className='m-auto'>/</span>
        <input type='text' className='form-control m-2' id='inputPeople' />
      </div>
      <div className='col-2 d-inline-flex'>
        <label for='inputBill' className='form-label m-auto'>
          <h5>Bill: </h5>
        </label>
        <span className='m-auto'>$</span>
        <input type='text' className='form-control m-2' id='inputPeople' />
      </div>
      <Button>Update</Button>
    </form>
  );
};

export default TableForm;
