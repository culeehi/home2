import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Destinations from './components/Destinations/Destinations';
import Portifolio from './components/Portifolio/Portifolio';
import Tip from './components/Tip/Tip';
import Footer from './components/Footer/Footer';
import Fixed from './components/Fixed/Fixed';
import ScrollToTopButton from './Scroll/Scroll';

function App() {
   return (
      <div className="App">
         <Navbar />
         <Home />
         <Destinations />
         <Portifolio />
         <Tip />
         <Footer />
         <Fixed />
         <ScrollToTopButton />
      </div>
   );
}

export default App;
