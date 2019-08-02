import React, {Component} from 'react';
import Grill from './Product/Products/Grill'
import Fireplace from './Product/Products/Fireplace'
import './SingleProduct.scss'
import NotFound from '../NotFound/NotFound'

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

    renderProductPage(param){
      switch(param){
        case 'fireplace':
        return <Fireplace {...this.props}/>
        case 'grill':
        return <Grill {...this.props}/>
        default:
        return <NotFound/>
      }
    }
    
    render() {
      return (
        <div id = "single-product" >
          {this.renderProductPage(this.props.match.params.type)}
        </div>
      )
    }
}

export default SingleProduct