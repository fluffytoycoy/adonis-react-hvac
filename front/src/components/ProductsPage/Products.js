import React, {Component } from 'react';
//import axios from 'axios';
import './Products.scss';
import Filters from './Filters/Filters';
import ProductTypes from './ProductTypes/ProductTypes';
import ProductsDisplayGrid from './ProductsDisplayGrid/ProductsDisplayGrid';
import Coupon from '../Utils/Coupon/Coupon'
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
    const {category, subType} = this.props.match.params;
    console.log(category, subType)
    //If Type is truthy set the page
    if(subType){
        this.setState({
          selectedType: subType
        })
      }
    }

  componentDidMount() {
    const {category, subType} = this.props.match.params;
      if (this.state.error) {
        this.props.history.push(`/Products/${category}/${subType}`)
      }
    }

  componentWillReceiveProps(nextProps){
      //Handle new PagingInfo
      //If selected Type is different setState to new type prop
      const {category, subType} = this.props.match.params;
      if(subType !== nextProps.match.params.subType){
        this.setState({
          selectedType: nextProps.match.params.subType
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
              {...this.props}
              selectedType={this.state.selectedType}
              />
            <ProductBanner   selectedType={this.state.selectedType}/>
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

function ProductBanner(props){
  return  props.selectedType ?
      <></>
      : <Coupon/>
}
export default Products;
