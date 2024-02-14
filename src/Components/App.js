import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Derechos from './Footer/Derechos.jsx';
import "./GeneralComponentes.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from '../Routes/Rutas.jsx';



function App() {
  return (
    <div className="App">
      <Router>
        <Banner />
        <Rutas />
        <Footer />
        <Derechos />

      </Router>
    </div>
  );
}

export default App;
