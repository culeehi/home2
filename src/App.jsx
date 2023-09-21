import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Destinations from './components/Destinations/Destinations';

function App() {
   return (
      <div className="App">
         <Navbar />
         <Home />
         <Destinations />
      </div>
   );
}

export default App;
