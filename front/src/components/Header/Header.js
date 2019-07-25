import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

function Header(){

    return (
      <div id="header">
        <div className="container">
          <div className="nav">
              <Link aria-label="Go To HomePage" className="logo" to="/"><img src="/img/chamber_logo.png" /></Link>
              <div>
                <h3>(565)-555-3432</h3>
                <ul>
                  <li><Link aria-label="Go To HomePage" to="/">Home</Link></li>
                  <li><Link aria-label="Go To Services Page" to="/services">Services</Link></li>
                  <li><Link aria-label="Go To Products Page" to="/products">Products</Link></li>
                  <li><Link aria-label="Go To Contact Page" to="/contact">Contact</Link></li>
                </ul>
              </div>
          </div>
        </div>
      </div>

    );
}

export default Header;
