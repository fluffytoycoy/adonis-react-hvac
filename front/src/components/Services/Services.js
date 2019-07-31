import React from 'react';
import './Services.scss';
import ServiceBody from './ServiceBody'
import ServiceLinks from './ServiceLinks'

function Services(props){

    return (
      <div id="services">
        <div className="header">
          <div className="container">
            <div>
              <div className="header-title">
                <h1>friendly Service.</h1>
                <h1>Certified Satisfaction.</h1>
              </div>
              <h3>If you are looking for excellent service and a people friendly approach,
              then you have come to the right place. At Chamberlin Heating and Colling we
              offer all our services both residentially and commercially. Our team will
              stop at nothing to ensure that you come away satified.</h3>
            </div>
          </div>
        </div>
        <div className="service-body">
          <div className="container">
            <div>
              <ServiceLinks/>
              <ServiceBody {...props}/>
            </div>
          </div>
        </div>
     </div>

    );
}

export default Services;
