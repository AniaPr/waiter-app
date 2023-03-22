import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Waiter.app</Navbar.Brand>
          <Nav className='me-0'>
            <Nav.Link href='#home'>Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1 className='m-3'>All tables</h1>
    </>
  );
};

export default Header;
