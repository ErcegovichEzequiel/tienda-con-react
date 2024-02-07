import Banner from './Banner/Banner'
import Nav from './Navbar/Nav'
import Footer from './Footer/Footer'
import { Home } from './Home/Home';


function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
