import React from 'react';
import ReviewSlider from './Slider';
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
        <div className="home-body-wrapper">
            <div className="about-us container">
                <div className="title"></div>
                <div className="about-us-info">
                  <img src="/img/family.webp"/>
                  <div>
                    <h2>Its All About the Details</h2>
                    <p>Since 2006, Chamberlin Heating & Air Conditioning
                     has been recognized as a top HVAC Contractor in Muscatine.
                     We’ve provided clients with a wide range of contracting
                     services for all their remodeling and repairing needs.
                     Whether you’re looking to renovate your existing space or
                     add a whole new extension, we’re happy to help you achieve
                     the results you seek. </p>
                   </div>
                  </div>
            </div>

            <div className="bullet-points">
              <div className="container">
              <div>
                <div className="circle">
                    <h3>COMMERCIAL</h3>
                    <img src="/img/tower.png"/>
                    <p>Total Air &amp; Heat offers comprehensive
                       HVAC services to help ensure your systems
                       run efficiently.</p>
                 </div>
                 <div className="circle">
                      <h3>RESIDENTIAL</h3>
                      <img src="/img/tower.png"/>
                      <p>Whatever your commercial HVAC needs,
                         the certified technicians at Total Air &amp;
                         Heat can help.</p>
                  </div>
                  <div className="circle">
                    <h3>FIREPLACES</h3>
                    <img src="/img/tower.png"/>
                    <p>Whether you need a new heat pump or emergency
                      AC repairs, Total Air &amp; Heat is the HVAC
                      contractor for you.
                    </p>
                  </div>
                  <div className="circle">
                    <h3>GRILLS</h3>
                    <img src="/img/tower.png"/>
                    <p>Whether you need a new heat pump or emergency
                      AC repairs, Total Air &amp; Heat is the HVAC
                      contractor for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="coupon">
              <div className="container">
                <div>
                  <div className="coupon-title row">
                    <h1>SAVE MONEY RIGHT NOW</h1>
                    <h1> HEAT &amp; GLO COUPON</h1>
                  </div>
                  <div className="row">
                    <img src="https://www.heatnglo.com:443/Offers/Coupons/Discount-100/-/media/images/promotion-images/coupon/new-100-coupon/hng-coupon.jpg" />
                  </div>
                </div>
              </div>
            </div>


            <div className="reviews">
              <div className="container">
               <div>
                <ReviewSlider/>
                </div>
              </div>
            </div>

            <div className="service-section">
              <div className="container">
                <div>
                <h2>We Service All Makes & Models</h2>
                <div className="service-model-icons">
                  <img src="/img/amana.png"/>
                  <img src="/img/american-standard.png"/>
                  <img src="/img/ao-smith.png"/>
                  <img src="/img/carrier.png"/>
                  <img src="/img/lennox.png"/>
                  <img src="/img/rheem.png"/>
                  <img src="/img/state-water.png"/>
                  <img src="/img/york.png"/>
                </div>
                </div>
              </div>

            </div>

          </div>
      </div>
    );
}

export default Home;
