import React from 'react';
import './Navbar.css';

import logo from '../../assests/img/logoNav.png';

const Navbar = () => {
   return (
      <div className="logo_wrapper">
         <div className="logo_container">
            <img src={logo} alt="" />
         </div>
         <div className="menu_wrapper">
            <div className="nav_wrapper">
               <div className="nav_wrapper_inner">
                <div className="menu_border_wrapper"></div>
               </div>
               <div className="logo_right_button"></div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
