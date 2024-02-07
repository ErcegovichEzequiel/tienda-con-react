import Banner from './Banner/Banner'
import Nav from './Navbar/Nav'
import Footer from './Footer/Footer'
import Carousel from './Home/Carousel'
import Merpago from './Home/Merpago'
import { JuegosDestacados } from './Destacados/Destacados'


function App() {
  return ( 
    <div className="App">
      <Banner/>
      <Nav/>
      <Carousel/>
      <Merpago/>
    <JuegosDestacados/>
      <Footer/>




    </div>
);
}

export default App;
