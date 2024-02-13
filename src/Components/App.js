import Banner from './Banner/Banner'
import Navbarr from './Navbarr/Navbarr.jsx'
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
      <Navbarr/>
      <Home />
      <Footer />
      <Derechos />
    </div>
  );
}

export default App;
