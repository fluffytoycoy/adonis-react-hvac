import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom'
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
        case 'gas':
        return <GasProduct {...this.props}/>
        break;
        case 'wood':
        return <SingleProduct {...this.props}/>
        break;
        default:
        return <NotFound/>
      }
    }
    render()
{    return (
            <>{this.renderProductPage(this.props.match.params.type)}</>
    )}
}

export default ProductHOC