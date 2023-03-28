import { Link } from 'react-router-dom';

const Button = ({ children, id }) => {
  return (
    <>
      <Link to={`/table/${id}`}>
        <button className='btn btn-primary' type='button'>
          {children}
        </button>
      </Link>
    </>
  );
};

export default Button;
