import React from 'react';
import {Link} from 'react-router-dom';
import NavMenu from './NavMenu';
import './Header.scss';

function Header(){

    return (
      <div id="header">
        <div className="container">
          <div className="nav">
              <Link aria-label="Go To HomePage" className="logo" to="/"><img  alt="Chamberlin logo" src="/img/chamber_logo.png" /></Link>
              <NavMenu/>
          </div>
        </div>
      </div>

    );
}

export default Header;
