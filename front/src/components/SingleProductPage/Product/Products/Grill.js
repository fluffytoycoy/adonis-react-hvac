import React, {Component } from 'react';

import axios from 'axios';
import ProductInfo from '../ProductInfo/ProductInfo';
import Loading from '../../../Utils/Loading/Loading';
import { Redirect } from 'react-router-dom'
import NotFound from '../../../NotFound/NotFound'
import ProductInterface from '../ProductInterface'

class Grill extends ProductInterface {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <div className="container single-product-wrapper">
        {this.state.redirect ? <NotFound/> : <ProductInfo handleModelChange={this.handleModelChange} {...this.props} {...this.state}/>}
      </div>
      );
    }

}

export default Grill;
