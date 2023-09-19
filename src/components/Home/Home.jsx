import React from 'react';

import './Home.css';

import Video from '../../assests/video/videobg.mp4';

const Home = () => {
   return (
      <div className="home">
         <div className="videoBg">
            <video src={Video} autoPlay loop muted></video>
         </div>
      </div>
   );
};

export default Home;
