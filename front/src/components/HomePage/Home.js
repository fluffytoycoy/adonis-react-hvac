import React from 'react';
import './Home.scss';

function Home(){
    return (
      <div id="home">
        <div className="hero">
            <h1>Muscatines trusted <span>HVAC</span> experts</h1>
            <h3>Contact us for a free estimate today!</h3>
            <div className="contact-btn">Contact Us</div>
          <div className="bg"></div>
        </div>
        <div className="home-body">
          <div className="container">
            <div className="about-us">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;
