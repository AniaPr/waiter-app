import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <>
      <Link to='/table/:id'>
        <button type='button' className='btn btn-primary'>
          {props.children}
        </button>
      </Link>
    </>
  );
};

export default Button;
