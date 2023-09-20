import './Navbar.css';

import Shownav from './Logic/Shownav';

import logo from '../../assests/img/logoNav.png';
import { LuShoppingCart } from 'react-icons/lu';
import { BsList } from 'react-icons/bs';

const Navbar = () => {
   return (
      <div className="home-narbar">
         <div className="nav-area">
            <div className="logo">
               <img src={logo} alt="" />
            </div>
            <div className="navbar">
               <Shownav />
               <div className="payment">
                  <BsList />
                  <div className="shop">
                     <LuShoppingCart />
                     <span className="number">
                        <span className="point"></span>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
