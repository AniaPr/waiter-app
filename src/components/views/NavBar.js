import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='d-flex col-12 flex-column flex-sm-row justify-content-sm-between'>
      <Navbar.Brand as={NavLink} to='/'>
        Waiter.app
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={NavLink} to='/' className='ps-0 py-0 ps-sm-2 py-2'>
          Home
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to='/table/addtable'
          className='ps-0 py-0 ps-sm-2 py-2'>
          Add table
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default NavBar;
