import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";
import NavDropdown from 'react-bootstrap/NavDropdown';




function Banner() {
    return (
        <>
            <Navbar className='navSup'>
                    <Nav className="navListaGeneral">
                        <Link className='navLista' to="/src/Components/IniSesion/IniciaSesion.jsx">Inisio de Sesión</Link>
                        <Link className='navLista' to="/src/Components/Registrarme">Regístrate</Link>
                        <Link className='navLista' to="/src/Components/Carrito/Carrito.jsx"><FaCartShopping /></Link>
                    </Nav>
            </Navbar>

            <section className='banner'>
                {/* <div className="logo">
                    <img className="isologo"
                        src="/img/logo.png"
                        alt="Isologo" />
                </div> */}

                <div className="nombrelogo">
                    <h1 className='nombre'>PIMPINELAS GAME</h1>
                    <h4 className='frase'>Entretenimiento Asegurado</h4>
                </div>
            </section>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link> <Link to="/">Inicio</Link></Nav.Link>
                            <Nav.Link> <Link to="/">Contactanos</Link></Nav.Link>
                            <NavDropdown title="Tienda" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/src/Components/Tienda/Tienda.jsx">Juegos</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/src/Components/Banner/EnConstruccion.jsx">Consolas</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Banner;



