import React, {Component} from 'react';
///import NotFound from './components/NotFound/NotFound';
import GridItem from './GridItem';
import './ProductsDisplayGrid.scss';
import Pagination from 'react-router-pagination';
import Loading from '../../Utils/Loading/Loading';
import queryString from 'query-string'
import axios from 'axios';

class ProductsDisplayGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: undefined,
      productCount: '',
    };
  };

  getAllProducts () {
    var self = this;
    const _qs = this.getFilterQueries(this.props.queries)
    console.log(_qs)
    setTimeout(function() {
    axios.get(`/api/v1/getProductsByType${_qs}`)
        .then(response =>
          self.setState({
          products: response.data.result,
          productCount: response.data.count
        })).catch(error => console.log(error))
    }, 1000)
  }

  getFilterQueries(queries){
    const {category, subType} = this.props.match.params;
    const pageInfo = this.props.pageInfo;
    const filters = queryString.parse(this.props.history.location.search)
    let _qs = `?category=${category}${subType ? '&subType=' + subType : ''}&pageNum=${pageInfo.pageNum}&limit=${pageInfo.productsPerPage}`;
    Object.keys(filters).forEach(key=>{
      if(filters[key]){
        _qs += `&${key}=${filters[key]}`
      }
    })
    return _qs;
  }

  componentWillMount(){
    //on mount if exact route wasn't /products render with
    //minimized pictures
      this.getAllProducts();
  }

  componentWillReceiveProps(newprops){
    //this handles forward and backwards movement routing browser
    if(this.props.selectedType !== newprops.selectedType || true){
      this.setState({
        products: undefined
      }, ()=> {
        this.getAllProducts()
      })
    }
  }

  isLoaded(){
    return this.state.products
  }

  getPageRouteInfo(){
    //build new url from previous url
    //if variables are undefined return '/' or '' instead
    const category = this.props.match.params.category;
    const subType = this.props.match.params.subType ? this.props.match.params.subType + '/' : '/'
    const pageInfo = this.props.pageInfo.productsPerPage || '';

    return {path: `/Products/${category}${subType}Page/:pageNumber/${pageInfo}${this.props.history.location.search}`}
  }

  getTotalPages(){
    const pageInfo = this.props.pageInfo;
    return Math.ceil(this.state.productCount/pageInfo.productsPerPage)
  }

  render(){
    return (
      <>
      <div className="product-grid-wrapper">


        <DisplayGrid
          productSelected={this.props.productSelected}
          products={this.state.products}
          history={this.props.history}/>
      </div>
      {this.isLoaded() ? <Pagination match={this.getPageRouteInfo()} totalPages={this.getTotalPages()} pageNumber={this.props.pageInfo.pageNum} spread={12/2} /> : <></>}
      </>
    );
  }

}


function DisplayGrid(props) {
  return props.products ?   <div id="product-section">
      <div id="product-grid" >
        <GridItem {...props} />
      </div>
    </div> : <Loading/>

  }

export default ProductsDisplayGrid;
