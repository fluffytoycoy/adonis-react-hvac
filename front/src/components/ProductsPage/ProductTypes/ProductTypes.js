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
    this.props.history.push(`/Products/${value.category}/${value.subType}`)
  }

render(){
  return (
    <div className="product-type-grid">

      <div className={`fireplace product-type-bg ${this.state.fadeClass}  ${(this.props.selectedType === 'fireplace' ) ? 'selected': ''}` }onClick={()=> this.selection({category: 'fireplace', subType: 'electric'})}>
        <div className="type">Fireplaces</div>
      </div>
      <div className={`grills product-type-bg ${this.state.fadeClass}  ${(this.props.selectedType === 'grill' ) ? 'selected': ''}`} onClick={()=> this.selection({category: 'grill', subType: 'outdoor'})}>
        <div className="type">Grills</div>
      </div>
    </div>
  );
}


}

export default ProductTypes;
