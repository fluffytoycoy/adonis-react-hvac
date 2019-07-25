import React, {Component, useEffect} from 'react';
import { Route, withRouter } from 'react-router-dom';


const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTop);
