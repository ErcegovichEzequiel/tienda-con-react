import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";





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

                <div className="nombrelogo">
                    <h1 className='nombre'>PIMPINELAS GAME</h1>
                    <h4 className='frase'>Entretenimiento Asegurado</h4>
                </div>

            </section>

            <Navbar expand="lg" className="navInf">
                <Navbar.Toggle className="listaInferior" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="listaInferior">
                    <Nav className="listaGeneralInferior">
                        <Nav.Link> <Link className="listaInferior" to="/">Inicio</Link></Nav.Link>
                        <Nav.Link><Link className="listaInferior" to="/src/Components/Tienda/Tienda.jsx">Juegos</Link></Nav.Link>
                        <Nav.Link><Link className="listaInferior" to="/src/Components/Banner/EnConstruccion.jsx">Consolas</Link></Nav.Link>
                        <Nav.Link> <Link className="listaInferior" to="/src/Components/Footer/Footer.jsx">Contactanos</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Banner;