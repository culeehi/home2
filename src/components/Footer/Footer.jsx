import React from 'react';
import './Footer.css';

import awrds from '../../assests/img/awards.png';
import phat from '../../assests/img/phat.jpg';
import chimcut from '../../assests/img/chimcut.jpg';

import { MdOutlinePhoneIphone } from 'react-icons/md';
import { LiaMapMarkerAltSolid } from 'react-icons/lia';
import { GiAlarmClock } from 'react-icons/gi';

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer-top">
            <div className="footer-info">
               <div className="footer-nav">
                  <h3>Our Awards</h3>
                  <p>
                     London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the
                     United Kingdom.
                  </p>
                  <img src={awrds} alt="" />
               </div>
               <div className="footer-nav">
                  <div className="container-contact">
                     <h3>Contact Info</h3>
                     <div className="contacts">
                        <div className="contact">
                           <MdOutlinePhoneIphone />
                           <p className="textwidget">0869163113</p>
                        </div>
                        <div className="contact">
                           <LiaMapMarkerAltSolid />
                           <p className="textwidget">Me Tri Nam Tu Liem Ha noi</p>
                        </div>
                        <div className="contact">
                           <GiAlarmClock />
                           <p className="textwidget">Mon - Sat 9.00 - 18.00</p>
                        </div>
                     </div>
                     <div className="icons-contact">
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-pinterest"></i>
                        <i className="fa-brands fa-instagram"></i>
                     </div>
                  </div>
               </div>
               <div className="footer-nav">
                  <h3>Recent Trips</h3>
                  <div className="recent">
                     <div className="recent-item">
                        <img src={phat} alt="" />
                     </div>
                     <div className="recent-item">
                        <img src={chimcut} alt="" />
                     </div>
                     <div className="recent-item">
                        <img src={phat} alt="" />
                     </div>
                     <div className="recent-item">
                        <img src={chimcut} alt="" />
                     </div>
                     <div className="recent-item">
                        <img src={phat} alt="" />
                     </div>
                     <div className="recent-item">
                        <img src={chimcut} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer-bootom">
            <div className="container-bootom">
               <div className="copyright">
                  <span> ©Copyright Grand Tour Theme Demo - Theme by ThemeGoods</span>
               </div>
               <div className="copyleft">
                  <span>Home</span>
                  <span>Tour</span>
                  <span>Blog</span>
                  <span>Purchse</span>
                  <span>Theme</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
