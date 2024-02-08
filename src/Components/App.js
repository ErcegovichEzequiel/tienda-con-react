import Banner from './Banner/Banner'
import Nav from './Navbar/Nav'
import Footer from './Footer/Footer'

import { Home } from './Home/Home';
import { IniciaSesion } from './IniSesion/IniciaSesion';
import { Registrarme } from "./Registrarme/Registrarme";
import { Carrito } from './Carrito/Carrito';

import Juegos from './Juegos/Juegos.jsx';


function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />
      <Home />

      <IniciaSesion />
      <Registrarme />
      <Carrito />

      <Juegos />

      <Footer />
    </div>
  );
}

export default App;
