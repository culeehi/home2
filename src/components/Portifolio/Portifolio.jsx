import React from 'react';

import './Portifolio.css';
import map from '../../assests/img/Map-Marker.png';
import Location from '../../assests/img/Worldwide-Location.png';
import Balloon from '../../assests/img/Hot-Air-Balloon.png';
import lua from '../../assests/img/lua.jpeg';

const Portifolio = () => {
   return (
      <div className="portifolio">
         <div className="portifolio-review">
            <div className="portifolio-title">
               <h1>Why choose Us</h1>
               <p>Here are reasons you should plan trip with us</p>
            </div>
            <div className="standard_wrapper">
               <div className="standard_wrapper-items">
                  <img src={map} alt="" />
                  <h3>Handpicked Hotels</h3>
                  <p>
                     Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                  </p>
               </div>
               <div className="standard_wrapper-items">
                  <img src={Location} alt="" />
                  <h3>World Class Service</h3>
                  <p>
                     Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                  </p>
               </div>
               <div className="standard_wrapper-items">
                  <img src={Balloon} alt="" />
                  <h3>Best Price Guarantee</h3>
                  <p>
                     Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                  </p>
               </div>
            </div>
         </div>
         <div className="lua">
            <img src={lua} alt="" />
         </div>
      </div>
   );
};

export default Portifolio;
