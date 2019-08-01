import React, {Component} from 'react';
import GasProduct from './GasProduct/GasProduct'
import SingleProduct from './SingleProduct'
import NotFound from '../NotFound/NotFound'

class ProductHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

    renderProductPage(param){
      switch(param){
        case 'fireplace':
        return <SingleProduct {...this.props}/>
        case 'grill':
        return <GasProduct {...this.props}/>
        default:
        return <NotFound/>
      }
    }
    render()
{    return (
            <div id="single-product">{this.renderProductPage(this.props.match.params.type)}</div>
    )}
}

export default ProductHOC