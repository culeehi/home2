import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Destinations from './components/Destinations/Destinations';
import Portifolio from './components/Portifolio/Portifolio';
import Tip from './components/Tip/Tip';
import Footer from './components/Footer/Footer';

function App() {
   return (
      <div className="App">
         <Navbar />
         <Home />
         <Destinations />
         <Portifolio />
         <Tip />
         <Footer />
      </div>
   );
}

export default App;
