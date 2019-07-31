import React from 'react';
import './Services.scss';
import {Link} from 'react-router-dom';
import ServiceBody from './ServiceBody'

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
              <div className="service-links card">
              <h3>Services</h3>
                <ul>
                  <li><Link to="/Services/Air-Conditioning-Duct-Repair">Air Conditioning Duct Repair</Link></li>
                  <li><Link to="/Services/Air-Conditioning-Installation">Air Conditioning Installation</Link></li>
                  <li><Link to="/Services/Air-Conditioning-Repair">Air Conditioning Repair</Link></li>
                  <li><Link to="/Services/Air-Duct-Installation">Air Duct Installation</Link></li>
                  <li><Link to="/Services/Commercial-Heating-System-Repair">Commercial Heating System Repair</Link></li>
                  <li><Link to="/Services/Furnace-Repair">Furnace Repair</Link></li>
                  <li><Link to="/Services/Furnace-Service">Furnace Service</Link></li>
                  <li><Link to="/Services/HVAC-Service">HVAC Service</Link></li>
                  <li><Link to="/Services/Geothermal-Air-Conditioning-Installation">Geothermal Air Conditioning Installation</Link></li>
                  <li><Link to="/Services/Heating-System-Installation">Heating System Installation</Link></li>
                  <li><Link to="/Services/Heating-System-Repair">Heating System Repair</Link></li>
                  <li><Link to="/Services/Sheet-Metal-Fabrication">Sheet Metal Fabrication</Link></li>
                </ul>
              </div>
              <div className="service-info card">
                <ServiceBody {...props}/>
              </div>
            </div>
          </div>
        </div>
     </div>

    );
}

export default Services;
