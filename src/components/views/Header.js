import Navbar from 'react-bootstrap/Navbar';
import NavBar from './NavBar';

const Header = () => {
  return (
    <>
      <Navbar
        bg='primary'
        variant='dark'
        className='justify-content-between p-2'>
        <NavBar />
      </Navbar>
    </>
  );
};

export default Header;
