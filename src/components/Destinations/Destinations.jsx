import React from 'react';
import './Destinations.css';

import { BiTimeFive } from 'react-icons/bi';

import tokyo from '../../assests/img/tokyo.jpg';
import seoul from '../../assests/img/seoul.jpg';
import paris from '../../assests/img/paris.jpg';
import london from '../../assests/img/london.jpg';

import vienam from '../../assests/img/country/vietnam.jpg';

const Destinations = () => {
   return (
      <div className="destination">
         <div className="destination-title">
            <h1>Popular Destinations</h1>
            <p>World's best tourist destinations</p>
         </div>
         <div className="popularPlaces">
            <div className="content">
               <div className="images ">
                  <div className="imade">
                     <img src={tokyo} alt="" />
                     <h3>Tokyo</h3>
                  </div>
                  <div className="imade">
                     <img src={seoul} alt="" />
                     <h3>Seoul</h3>
                  </div>
                  <div className="imade">
                     <img src={paris} alt="" />
                     <h3>Paris</h3>
                  </div>
                  <div className="imade">
                     <img src={london} alt="" />
                     <h3>London</h3>
                  </div>
               </div>
            </div>
         </div>
         <div className="destination-title">
            <h1>Best Value Trips</h1>
            <p>Best offers trips from us</p>
         </div>
         <div className="popular_country">
            <div className="nav_img-top">
               <img src={vienam} alt="" />
               <h3>$5,000</h3>
            </div>
            <div className="nav-title-bootom">
               <div className="title">
                  <h2>Viet Nam</h2>
                  <p>Ha Long, Quang Ninh</p>
               </div>
               <div className="rating">
                  <div className="rating-star">
                     <div className="star"></div>
                     <div className="star"></div>
                     <div className="star"></div>
                     <div className="star white"></div>
                     <p>4 review</p>
                  </div>
                  <div className="howlong">
                     <BiTimeFive />
                     <p>5 days</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Destinations;
