// import './Navbar.css';
import './repon.css';

import Shownav from './Logic/Shownav';

import logo from '../../assests/img/logoNav.png';
import { LuShoppingCart } from 'react-icons/lu';
import { BsList } from 'react-icons/bs';

import React, { useEffect, useState } from 'react';

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <div className="home-narbar">
         <div className="nav-area">
            <div className="logo">
               <img src={logo} alt="" />
            </div>

            <div className="navbar">
               <div className="show_nav">
                  <Shownav />
               </div>
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
