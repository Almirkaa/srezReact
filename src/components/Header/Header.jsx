import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import s from './Header.module.css'

function Header() {
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark" className={s.navbar}>
        <Container>
          <Navbar.Brand href="#home" className={s.navBrand}>КОВРЫ</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className={s.nav}>Home</Nav.Link>
            <Nav.Link href="#features" className={s.nav}>Features</Nav.Link>
            <Nav.Link href="#pricing" className={s.nav}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     
    </>
  );
}

export default Header;