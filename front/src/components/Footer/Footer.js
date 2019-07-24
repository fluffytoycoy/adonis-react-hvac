import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

function Footer(){

    return (
      <div id="footer">
        <div className="container">
          <div>
            <div className="row location">
              <div>
                <img src="/img/chamber_logo.png" />
              </div>
              <div className="address">
                <p>4214 Domino Avenue, Suite A </p>
                <p>North Charleston, SC 29405</p>
              </div>
              <p className="phone">(565)-555-3432</p>
            </div>
            <div className="row hours">
                <h3>Buisness Hours</h3>
                <div>
                  <p>Monday</p>
                  <p>8AM–5PM</p>
                </div>
                <div>
                  <p>Tuesday</p>
                  <p>8AM–5PM</p>
                </div>
                <div>
                  <p>Wednesday</p>
                  <p>8AM–5PM</p>
                </div>
                <div>
                  <p>Thursday</p>
                  <p>8AM–5PM</p>
                </div>
                <div>
                  <p>Friday</p>
                  <p>8AM–5PM</p>
                </div>
                <div>
                  <p>Saturday</p>
                  <p>10AM–2PM</p>
                </div>
                <div>
                  <p>Sunday</p>
                  <p>Closed</p>
                </div>
            </div>
          </div>
        </div>
        <div className="social-media">
        <div className="container">
          <div>
          </div>
          </div>
        </div>
      </div>

    );
}

export default Footer;
