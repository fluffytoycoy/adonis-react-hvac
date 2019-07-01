import React, {Component } from 'react';
import axios from 'axios';
import './Products.scss';
import ProductTypes from './ProductTypes/ProductTypes';
import ProductsDisplayGrid from './ProductsDisplayGrid/ProductsDisplayGrid';
///import NotFound from './components/NotFound/NotFound';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: undefined,
      selectedType: ''
    };
  };


  componentWillMount(){
    const type = this.props.match.params.type;
    console.log(type)
    if(type){
        this.setState({
          selectedType: type
        })
      }
    }

  componentWillReceiveProps(nextProps){
      const currentSelection = this.props.match.params.type
      const nextSelection = nextProps.match.params.type
      if(currentSelection !== nextSelection){
        this.setState({
          selectedType: nextSelection
        })
      }
    }

  render() {
    return (
      <div className="container product">
        <div className="product-header">
          <h1>Products</h1>
        </div>
        <ProductTypes selectedType={this.state.selectedType} history={this.props.history} />
        <ProductSection selectedType={this.state.selectedType} history={this.props.history}/>
      </div>
    );
  }
}

function ProductSection(props) {
  switch(props.selectedType){
    case 'electric':
    return <ProductsDisplayGrid selectedType={props.selectedType} history={props.history}/>
    break;
    case 'gas':
    return <ProductsDisplayGrid selectedType={props.selectedType} history={props.history}/>
    break;
    case 'outdoors':
    return <ProductsDisplayGrid selectedType={props.selectedType} history={props.history}/>
    break;
    case 'wood':
    return <ProductsDisplayGrid selectedType={props.selectedType} history={props.history}/>
    break;
    default:
    return  <></>
  }


}
export default Products;
