import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Home} from '../Home/Home';
import Tienda from '../Tienda/Tienda';



function Navbarr() {
  return (
    <Router>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to="/">Inicio</Link></Nav.Link>
            <Nav.Link> <Link to="#link">Contactanos</Link></Nav.Link>
            <NavDropdown title="Tienda" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/src/Components/Tienda/Tienda.jsx">Juegos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="#action/3.2">Consolas</Link></NavDropdown.Item>              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Routes>
                    <Route path="/src/Components/Home/Home.jsx" element={<Home />}></Route>
                    {/* <Route path="/src/Components/Carrito/Carrito.jsx" element={<Carrito />}></Route> */}
                    <Route path="/src/Components/Tienda/Tienda.jsx" element={<Tienda />}></Route>

                </Routes>

    </Router> 
  );
}

export default Navbarr;