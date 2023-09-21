import React from 'react';
import './Destinations.css';

import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

import tokyo from '../../assests/img/tokyo.jpg';
import seoul from '../../assests/img/seoul.jpg';
import paris from '../../assests/img/paris.jpg';
import london from '../../assests/img/london.jpg';

import vienam from '../../assests/img/country/vietnam.jpg';
import korean from '../../assests/img/country/korean.jpg';
import american from '../../assests/img/country/american.jpg';

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
                     <span>Tokyo</span>
                  </div>
                  <div className="imade">
                     <img src={seoul} alt="" />
                     <span>Seoul</span>
                  </div>
                  <div className="imade">
                     <img src={paris} alt="" />
                     <span>Paris</span>
                  </div>
                  <div className="imade">
                     <img src={london} alt="" />
                     <span>London</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="destination-title">
            <h1>Best Value Trips</h1>
            <p>Best offers trips from us</p>
         </div>
         <div className="popular_country">
            <div className="country">
               <div className="nav_img-top">
                  <img src={vienam} alt="" />
                  <span>$5,000</span>
               </div>
               <div className="nav-title-bootom">
                  <div className="title">
                     <h2>Viet Nam</h2>
                     <p>Ha Long, Quang Ninh</p>
                  </div>

                  <div className="rating">
                     <div className="rating-star">
                        <div className="stars">
                           <AiFillStar className="star" />
                           <AiFillStar className="star" />
                           <AiFillStar className="star" />
                           <AiFillStar className="star" />
                           <AiOutlineStar className="nostar" />
                        </div>
                        <p>4 review</p>
                     </div>
                     <div className="howlong">
                        <div className="time">
                           <BiTimeFive />
                        </div>
                        <p>5 days</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="country">
               <div className="nav_img-top">
                  <img src={korean} alt="" />
                  <span>$6,000</span>
               </div>
               <div className="nav-title-bootom">
                  <div className="title">
                     <h2>Korean</h2>
                     <p>Seoul</p>
                  </div>

                  <div className="rating">
                     <div className="rating-star">
                        <div className="stars">
                           <AiFillStar className="star" />
                           <AiFillStar className="star" />
                           <AiFillStar className="star" />
                           <AiFillStar className="star" />
                           <AiOutlineStar className="nostar" />
                        </div>
                        <p>4 review</p>
                     </div>
                     <div className="howlong">
                        <div className="time">
                           <BiTimeFive />
                        </div>
                        <p>5 days</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="country">
               <div className="nav_img-top">
                  <img src={american} alt="" />

                  <span className="abc">$9,000</span>
                  <span className="sale-country">$7,000</span>
               </div>
               <span className="delete-sale"></span>
               <div className="nav-title-bootom">
                  <div className="title">
                     <h2>America</h2>
                     <p>New York City</p>
                  </div>

                  <div className="rating">
                     <div className="rating-star">
                        <div className="stars">
                           <AiFillStar className="star" />
                           <AiFillStar className="star" />
                           <AiFillStar className="star" />
                           <AiFillStar className="star" />
                           <AiOutlineStar className="nostar" />
                        </div>
                        <p>4 review</p>
                     </div>
                     <div className="howlong">
                        <div className="time">
                           <BiTimeFive />
                        </div>
                        <p>5 days</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Destinations;
