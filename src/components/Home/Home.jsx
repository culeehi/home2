import React from 'react';

import './Home.css';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineDateRange } from 'react-icons/md';
import { TbArrowsSort } from 'react-icons/tb';

import Video from '../../assests/video/videobg.mp4';

const Home = () => {
   return (
      <div className="home">
         <div className="videoBg">
            <video src={Video} autoPlay loop muted></video>
         </div>
         <div className="show-main">
            <div className="title-show-main">
               <h2 className="ppb_title">Where do you want to go?</h2>
               <p className="page_tagline">Trips, experiences, and places. All in one service.</p>
            </div>
            <div className="input_nav-tour">
               <div className="tour_sreach_wrapper">
                  <div className="one_fourth">
                     <input type="text" placeholder="Destination, city" />
                     <span>
                        <BsSearch className="icon-input" />
                     </span>
                  </div>
                  <div className="one_fourth">
                     <input type="text" placeholder="Any Month" />
                     <span>
                        <MdOutlineDateRange className="icon-input" />
                     </span>
                  </div>
                  <div className="one_fourth">
                     <input type="text" placeholder="Sort By Date" />
                     <span>
                        <TbArrowsSort className="icon-input" />
                     </span>
                  </div>
                  <div className="one_fourth one_fourth-search">
                     <input type="button" value="Search" />
                  </div>
               </div>
               <div className="tour_advance">
                  <div className="one_fourth">
                     <input type="text" placeholder="Sort By Date" />
                     <span>
                        <TbArrowsSort className="icon-input" />
                     </span>
                  </div>
                  <div className="one_fourth">
                     <input type="text" placeholder="Sort By Date" />
                     <span>
                        <TbArrowsSort className="icon-input" />
                     </span>
                  </div>
                  <div className="one_fourth">
                     <input type="text" placeholder="Sort By Date" />
                     <span>
                        <TbArrowsSort className="icon-input" />
                     </span>
                  </div>
               </div>
               <div className="tour_advance-toggle">
                  <p>Advance Search</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
