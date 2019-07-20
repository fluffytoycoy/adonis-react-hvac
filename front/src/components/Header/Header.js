import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

function Header(){

    return (
      <div id="header">
        <div className="container">
          <div className="nav">
              <Link className="logo" to="/"><img src="/img/chamber_logo.png" /></Link>
              <div>
                <h3>(565)-555-3432</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="">Services</Link></li>
                  <li><Link to="/products">Products</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link href="contact">Contact</Link></li>
                </ul>
              </div>
          </div>
        </div>
      </div>

    );
}

export default Header;
