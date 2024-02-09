import Banner from './Banner/Banner'
import Nav from './Navbar/Nav.jsx'
import Footer from './Footer/Footer'
import NavarSup from "./NavarSup/NavarSup.jsx";
import { Home } from './Home/Home';
import Derechos from './Footer/Derechos.jsx';

import "./GeneralComponentes.css";


function App() {
  return (
    <div className="App">
      <NavarSup />
      <Banner />
      <Nav />
      <Home />




      <Footer />
      <Derechos />
    </div>
  );
}

export default App;
