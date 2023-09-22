import React, { useState, useEffect } from 'react';
import { BiSolidChevronUp } from 'react-icons/bi';

import './Scroll.css';

function ScrollToTopButton() {
   const [isButtonVisible, setIsButtonVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 200) {
            setIsButtonVisible(true);
         } else {
            setIsButtonVisible(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   return (
      <div>
         {isButtonVisible && (
            <button className="scroll-to-top-button" onClick={scrollToTop}>
               <BiSolidChevronUp />
            </button>
         )}
      </div>
   );
}

export default ScrollToTopButton;
