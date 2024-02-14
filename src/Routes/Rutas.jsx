import { Route, Routes } from 'react-router-dom';
import { IniciaSesion } from '../Components/IniSesion/IniciaSesion';
import { Registrarme } from '../Components/Registrarme/Registrarme';
import { Carrito } from '../Components/Carrito/Carrito';
import { Home } from '../Components/Home/Home';
import Tienda from '../Components/Tienda/Tienda';
import { EnConstruccion } from '../Components/Banner/EnConstruccion';

function Rutas() {
    return (
        <Routes>
            <Route path="/src/Components/IniSesion/IniciaSesion.jsx" element={<IniciaSesion />}></Route>
            <Route path="/src/Components/Registrarme" element={<Registrarme />}></Route>
            <Route path="/src/Components/Carrito/Carrito.jsx" element={<Carrito />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/src/Components/Tienda/Tienda.jsx" element={<Tienda />}></Route>
            <Route path="/src/Components/Banner/EnConstruccion.jsx" element={<EnConstruccion />}></Route>
            
        </Routes>
    )
}
export default Rutas;



