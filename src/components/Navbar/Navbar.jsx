// import './Navbar.css';
import './repon.css';

import Shownav from './Logic/Shownav';

import logowhite from '../../assests/img/logoNav.png';
import logoblack from '../../assests/img/logo@2x.png';

import { LuShoppingCart } from 'react-icons/lu';
import { BsList } from 'react-icons/bs';

import React, { useEffect, useState } from 'react';

const Navbar = () => {
   const [scrollY, setScrollY] = useState(0);

   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      let prevScrollY = window.scrollY;

      const showhide = 400;

      const handleScroll = () => {
         const currentScrollY = window.scrollY;

         if (prevScrollY > currentScrollY) {
            setIsScrolled(false);
            console.log('an');
         } else {
            setIsScrolled(true);
            console.log('hien');
         }

         prevScrollY = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll);
      console.log(prevScrollY);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <div className={` ${scrollY ? 'class1' : 'class2'} `}>
         <div className={` ${isScrolled ? 'an-nav' : 'hien-nav'}`}>
            <div className="navbar-content">
               <div className="home-narbar">
                  <div className="nav-area">
                     <div className="logo">
                        {scrollY ? <img src={logoblack} alt="" /> : <img src={logowhite} alt="" />}
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
            </div>
         </div>
      </div>
   );
};

export default Navbar;
