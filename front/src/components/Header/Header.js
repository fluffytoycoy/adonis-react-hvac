import React from 'react';
import './Header.scss';

function Header(){

    return (
      <div id="header">
        <div className="container">
          <div className="nav">
              <img src="/img/chamber_logo.png" />
              <div>
                <h3>(565)-555-3432</h3>
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">Services</a></li>
                  <li><a href="">Products</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </div>
          </div>
        </div>
      </div>

    );
}

export default Header;
