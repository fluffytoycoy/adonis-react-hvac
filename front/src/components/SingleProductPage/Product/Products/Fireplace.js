import React from 'react';

import ProductInfo from '../ProductInfo/ProductInfo';
import NotFound from '../../../NotFound/NotFound'
import ProductInterface from '../ProductInterface'

class Fireplace extends ProductInterface {
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


export default Fireplace;
