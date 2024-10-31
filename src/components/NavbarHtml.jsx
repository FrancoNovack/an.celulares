import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartIcons from './CartIcons';
import Carrito from './Carrito';

function NavbarHtml() {
  return (
    <section className='navegacion'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='container-fluid'>
        <CartIcons/>
        <Navbar.Brand className='barra' href="#home">AN Celulares</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navbar-brand' href="#home">Iphone</Nav.Link>
            <Nav.Link className='navbar-brand' href="#link">Samsung</Nav.Link>
            <Nav.Link className='navbar-brand' href="#home">Morotola</Nav.Link>
            <Nav.Link  className='navbar-brand' href="#link">Xiaomi</Nav.Link>
          </Nav>
          <Carrito/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
}

export default NavbarHtml