import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { IniciaSesion } from '../IniSesion/IniciaSesion';
import { Registrarme } from '../Registrarme/Registrarme';
import { Carrito } from '../Carrito/Carrito';


function NavarSup() {
    return (
        <>
            <Router>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Nav className="me-auto">
                            <Link to="/src/Components/IniSesion/IniciaSesion.jsx">Inisio de Sesión</Link>
                            <Link to="/src/Components/Registrarme">Regístrate</Link>
                            <Link to="/src/Components/Carrito/Carrito.jsx"><FaCartShopping />
                            </Link>
                        </Nav>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/src/Components/IniSesion/IniciaSesion.jsx" element={<IniciaSesion />}></Route>
                    <Route path="/src/Components/Registrarme" element={<Registrarme />}></Route>
                    <Route path="/src/Components/Carrito/Carrito.jsx" element={<Carrito />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default NavarSup;