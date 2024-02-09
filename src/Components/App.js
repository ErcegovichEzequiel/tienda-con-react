import Banner from './Banner/Banner'
import Nav from './Navbar/Nav.jsx'
import Footer from './Footer/Footer'
import ColorSchemesExample from "./NavarSup/NavarSup.jsx";
import { Home } from './Home/Home';
import { IniciaSesion } from './IniSesion/IniciaSesion';
import { Registrarme } from "./Registrarme/Registrarme";
import { Carrito } from './Carrito/Carrito';
import Derechos from './Footer/Derechos.jsx';
import Juegos from './Juegos/Juegos.jsx';
import "./GeneralComponentes.css";


function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
      <Banner />
      <Nav />
      <Home />

      <IniciaSesion />
      <Registrarme />
      <Carrito />

      <Juegos />

      <Footer />
      <Derechos />
    </div>
  );
}

export default App;
