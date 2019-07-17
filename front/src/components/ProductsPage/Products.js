import React, {Component } from 'react';
import axios from 'axios';
import './Products.scss';
import Filters from './Filters/Filters';
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
      queries: {
        powerOptions: '',
        sideOptions: '',
      }
    };
  };

  componentWillMount(){
    console.log(this.props.match.params)
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
          page: 1,
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
          limit: 8,
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
          history={this.props.history}/>
          <Filters
            setPowerFilter={this.setPowerFilter}
            currentSelection={this.state.currentSelection}
            handleFilterSubmit={this.handleFilterSubmit}/>
        <ProductsSection
            productSelected={this.props.productSelected}
            page={this.state.page}
            limit={this.state.limit}
            queries={this.state.queries}
            selectedType={this.state.selectedType}
            history={this.props.history}/>
      </div>
    );
  }
}

function ProductsSection(props) {
  return props.selectedType ?
  <ProductsDisplayGrid queries={props.queries} productSelected={props.productSelected} page={props.page} limit={props.limit} selectedType={props.selectedType} history={props.history}/>
  : <></>
  }

export default Products;
