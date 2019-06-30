import React, {Component,  Redirect} from 'react';
///import NotFound from './components/NotFound/NotFound';
import './ProductTypes.scss';
class ProductTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: undefined,
      selectedType: '',
      fadeClass: ''
    };
  };

  componentWillUnmount(){
    this.setState({
      fadeClass: 'fade'
    })
  }
  selection(){
    this.setState({
      fadeClass: 'fade'
    })
    this.props.history.push('/products/gas')
  }

  gridClasses(){

  }

render(){
  return (
    <div className="product-type-grid">
      <div className={`gas ${this.state.fadeClass} ${this.props.selectedType === 'gas' ? 'selected': ''}`} onClick={()=> this.selection()}>
        <div className="type">Gas Fireplaces</div>
      </div>
      <div className={`wood ${this.state.fadeClass}` }onClick={()=> this.selection()}>
        <div className="type">Wood Fireplaces</div>
      </div>
      <div className={`electric ${this.state.fadeClass}` }onClick={()=> this.selection()}>
        <div className="type">Electric Fireplaces</div>
      </div>
      <div className={`outdoors ${this.state.fadeClass}`} onClick={()=> this.selection()}>
        <div className="type">Outdoor Fireplaces</div>
      </div>
    </div>
  );
}


}

export default ProductTypes;
