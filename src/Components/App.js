import Banner from './Banner/Banner'
import Nav from './Navbar/Nav'
import Footer from './Footer/Footer'
import { Home } from './Home/Home';
import { IniciaSesion } from './IniSesion/IniciaSesion';
import { Registrarme } from "./Registrarme/Registrarme";


function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />      
      <Home/>
      <IniciaSesion />
      <Registrarme />
      <Footer />
    </div>
  );
}

export default App;
