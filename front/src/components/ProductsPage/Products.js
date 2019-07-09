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
      limit: 8,
      error: {
        pageNum: false,
        limit: false
      },
    };
  };

  componentWillMount(){
    this.setPagingParams(this.props.match.params)
    const type = this.props.match.params.type;
    if(type){
        this.setState({
          selectedType: type
        })
      }
    }

  componentWillReceiveProps(nextProps){
      //Handle new PagingInfo
      this.setPagingParams(nextProps.match.params)
      //If selected Type is different setState to new type prop
      if(this.props.match.params.type !== nextProps.match.params.type){
        this.setState({
          selectedType: nextProps.match.params.type
        })
      }

    }

  setPagingParams(params) {

      if (isValidNumParam(params.pageNum)) {
        this.setState({
          page: params.pageNum
        })
      } else {
        this.setState(prevState => ({
          error: {
            ...this.state.error,
            pageNum: true
          }
        }))
      }
      if (isValidNumParam(params.itemsPerPage)) {
        this.setState({
          limit: parseInt(params.itemsPerPage)
        })
      } else {
        this.setState(prevState => ({
          error: {
            ...this.state.error,
            limit: true
          }
        }))
      }

      function isValidNumParam(param) {
        return Number.isInteger(parseInt(param));
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
