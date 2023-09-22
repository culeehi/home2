import React from 'react';
import './Fixed.css';

import { CiSettings } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Fixed = () => {
   return (
      <div className="fixed">
         <div className="fixed-icons">
            <div>
               <CiSettings className="fixed-icons-ic" />
            </div>
            <div>
               <AiOutlineHeart className="fixed-icons-ic" />
            </div>
            <div>
               <BsBook className="fixed-icons-ic" />
            </div>
            <div>
               <AiOutlineShoppingCart className="fixed-icons-ic" />
            </div>
         </div>
      </div>
   );
};

export default Fixed;
