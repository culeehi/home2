// import Navbar from './components/Navbar';
import './App.css';

import Navbar from '../Navbar/Components/Navbar';

const Intern = () => {
   return (
      <header>
         <div className="nav-area">
            <a href="/#" className="logo">
               CodeSolution
            </a>
            <Navbar />
         </div>
      </header>
   );
};

export default Intern;
