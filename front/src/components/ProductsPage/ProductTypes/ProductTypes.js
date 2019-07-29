import React, {Component} from 'react';
///import NotFound from './components/NotFound/NotFound';
import './ProductTypes.scss';

//This class handles the product type links at the top of the products page
class ProductTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeClass: ''
    };
  };

  componentWillMount(){
    //on mount if exact route wasn't /products render with
    //minimized pictures
    if(this.props.selectedType){
      this.setState({
        fadeClass: 'fade'
      })
    }
  }

  componentWillReceiveProps(props){
    //depending on the selected category props changing set fadeClass
    //this handles forward and backwards movement routing browser
    if(!props.selectedType){
      this.setState({
        fadeClass: ''
      })
    }else{
      this.setState({
        fadeClass: 'fade'
      })
    }
  }

  selection(value){
    //when a selection is made push new location in history
    // const queryString = this.props.history.location.search ? `${this.props.history.location.search}` : '';
    // this.props.history.push(`/Products/${value}/${queryString}`)
    this.props.history.push(`/Products/${value}/`)
  }

render(){
  return (
    <div className="product-type-grid">
      <div className={`gas product-type-bg ${this.state.fadeClass} ${(this.props.selectedType === 'gas' )? 'selected': ''}`} onClick={()=> this.selection('gas')}>
        <div className="type">Gas Fireplaces</div>
      </div>
      <div className={`wood product-type-bg ${this.state.fadeClass} ${(this.props.selectedType === 'wood' )? 'selected': ''}` }onClick={()=> this.selection('wood')}>
        <div className="type">Wood Fireplaces</div>
      </div>
      <div className={`electric product-type-bg ${this.state.fadeClass}  ${(this.props.selectedType === 'electric' )? 'selected': ''}` }onClick={()=> this.selection('electric')}>
        <div className="type">Electric Fireplaces</div>
      </div>
      <div className={`outdoors product-type-bg ${this.state.fadeClass}  ${(this.props.selectedType === 'outdoor' )? 'selected': ''}`} onClick={()=> this.selection('outdoor')}>
        <div className="type">Outdoor Fireplaces</div>
      </div>
    </div>
  );
}


}

export default ProductTypes;
