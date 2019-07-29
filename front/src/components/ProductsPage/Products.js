import React, {Component } from 'react';
//import axios from 'axios';
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
      error: false,
    };
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this)
  };

  componentWillMount(){
    //get Product Type from param
    const type = this.props.match.params.type;
    //If Type is truthy set the page
    if(type){
        this.setState({
          selectedType: type
        })
      }
    }

  componentDidMount() {
      if (this.state.error) {
        this.props.history.push(`/Products/${this.props.match.params.type}`)
      }
    }

  componentWillReceiveProps(nextProps){
      //Handle new PagingInfo
      //If selected Type is different setState to new type prop
      if(this.props.match.params.type !== nextProps.match.params.type){
        this.setState({
          selectedType: nextProps.match.params.type
        })
      }
    }

  pagingParams() {
    const pageInfo = this.props.match.params;
        return {pageNum: Number(pageInfo.pageNum) || 1, productsPerPage: Number(pageInfo.productsPerPage) || 8 }
    }

  handleFilterSubmit(query){
    this.setState({
      queries: query
    })
  }

  render() {
    return (
      <div id="product">
        <div className="container">
        <div>
          <ProductTypes
            selectedType={this.state.selectedType}
            history={this.props.history}/>
            <FilterSection
              {...this.props}
              selectedType={this.state.selectedType}
              currentQuery={this.state.queries}
              />
          <ProductsSection
              {...this.props}
              pageInfo = {this.pagingParams()}
              queries={this.state.queries}
              selectedType={this.state.selectedType}
              />
            </div>
        </div>
      </div>
    );
  }
}

function ProductsSection(props) {
  return props.selectedType ?
  <ProductsDisplayGrid {...props}/>
  : <></>
  }

function FilterSection(props){
    return props.selectedType ?
    <Filters {...props}/>
    : <></>
  }

export default Products;
