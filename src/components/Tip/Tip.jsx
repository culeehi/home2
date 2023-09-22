import React from 'react';
import './Tip.css';

import tokyo from '../../assests/img/tokyo.jpg';
import seoul from '../../assests/img/seoul.jpg';
import paris from '../../assests/img/paris.jpg';

import { BsChevronRight } from 'react-icons/bs';

const Tip = () => {
   return (
      <div className="tip">
         <div className="tip-title">
            <h1>Articles & Tips</h1>
            <p >Explore some of the best tips from around the world</p>
         </div>
         <div className="tip-navs">
            <div className="tip-nav">
               <div className="tip-img">
                  <img src={tokyo} alt="" />
               </div>
               <div className="tip-title">
                  <div className="tip-top">
                     <h6>DECEMBER 10, 2016</h6>
                     <h2>Memorial Day to Someone Told Me to Travel</h2>
                     <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
                  </div>
                  <div className="tip-bootom">
                     <div className="tip-more">
                        <h4>Read More</h4>
                        <div className="icon-tip">
                           <BsChevronRight />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tip-nav">
               <div className="tip-img">
                  <img src={seoul} alt="" />
               </div>
               <div className="tip-title">
                  <div className="tip-top">
                     <h6>DECEMBER 10, 2016</h6>
                     <h2>7 Tips For Nomads On A Budget Trips</h2>
                     <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
                  </div>
                  <div className="tip-bootom">
                     <div className="tip-more">
                        <h4>Read More</h4>
                        <div className="icon-tip">
                           <BsChevronRight />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tip-nav">
               <div className="tip-img">
                  <img src={paris} alt="" />
               </div>
               <div className="tip-title">
                  <div className="tip-top">
                     <h6>DECEMBER 10, 2016</h6>
                     <h2>Taking A Travel Blog Victory Lap</h2>
                     <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
                  </div>
                  <div className="tip-bootom">
                     <div className="tip-more">
                        <h4>Read More</h4>
                        <div className="icon-tip">
                           <BsChevronRight />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Tip;
