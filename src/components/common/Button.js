import { Link } from 'react-router-dom';

const Button = ({ children, id }) => {
  return (
    <>
      <Link to={`/table/${id}`}>
        <button type='button' className='btn btn-primary'>
          {children}
        </button>
      </Link>
    </>
  );
};

export default Button;
