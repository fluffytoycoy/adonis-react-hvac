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
      currentSelection: '',
      products: undefined,
      call: '',
      productCount: '',
      queries: ''
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
    const pageInfo = this.props.pageInfo;
    const filters = queryString.parse(this.props.history.location.search)
    console.log(filters)
    let _qs = `?type=${this.state.currentSelection}&pageNum=${pageInfo.pageNum}&limit=${pageInfo.productsPerPage}`;
    Object.keys(filters).map(key=>{
      if(filters[key]){
        _qs += `&${key}=${filters[key]}`
      }
    })
    return _qs;
  }

  componentWillMount(){
    //on mount if exact route wasn't /products render with
    //minimized pictures
    this.setState({
      currentSelection: this.props.selectedType,
    }, ()=> {
      this.getAllProducts();
    })
  }

  componentWillReceiveProps(newprops){
    //this handles forward and backwards movement routing browser
    if(this.state.currentSelection !== newprops.selectedType || true){
      this.setState({
        currentSelection: newprops.selectedType,
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
    const pageInfo = this.props.pageInfo;
    const filters = pageInfo.productsPerPage + '' + this.props.history.location.search;
    return {path: '/Products/:type/Page/:pageNumber/:productsPerPage', params: {type: this.state.currentSelection, productsPerPage: filters || ''}}
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
        <GridItem productSelected={props.productSelected} products={props.products} history={props.history} />
      </div>
    </div> : <Loading/>

  }

export default ProductsDisplayGrid;
