import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar.Brand as={NavLink} to='/'>
        Waiter.app
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={NavLink} to='/'>
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to='/table/addtable'>
          Add table
        </Nav.Link>
      </Nav>
    </>
  );
};

export default NavBar;
