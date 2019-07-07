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
      selectedType: '',
      page: 1,
      limit: 4,
      error: false,
      selectedProduct: undefined
    };
  };


  componentWillMount(){
    this.checkPageParams(this.props.match.params)
    ? this.setState({
      page: this.props.match.params.pageNum,
      limit: this.props.match.params.itemsPerPage,
    })
    : this.setState({
      error: true
    });

    const type = this.props.match.params.type;
    if(type){
        this.setState({
          selectedType: type
        })
      }
    }

  checkPageParams (params){
    if (isValidNumParam(params.pageNum) &&
      isValidNumParam(params.itemsPerPage)) {
      return true;
    } else {
      return false;
    }

    function isValidNumParam(param){

      return Number.isInteger(parseInt(param));
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
        <ProductTypes
          selectedType={this.state.selectedType}
          history={this.props.history}
        />
        <ProductsSection
            productSelected={this.props.productSelected}
            page={this.state.page}
            limit={this.state.limit}
            selectedType={this.state.selectedType}
            history={this.props.history}
        />
      </div>
    );
  }
}

function ProductsSection(props) {
  return props.selectedType ?
  <ProductsDisplayGrid productSelected={props.productSelected} page={props.page} limit={props.limit} selectedType={props.selectedType} history={props.history}/>
  : <></>
  }



export default Products;
