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
      _isMounted: ''
    };
  };

  componentWillMount(){
    //on mount if exact route wasn't /products render with
    //minimized pictures
    this.setState({
      _isMounted: true
    }, ()=>{
      this.getAllProducts()
    })
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

  componentWillUnmount(){
    this.state._isMounted = false;
  }

  getAllProducts () {
    var self = this;
    const _qs = getFilterQueries(this.props.queries)

    setTimeout(function()
    {
      if (self.state._isMounted) {
        axios.get(`/api/v1/getProductsByType${_qs}`)
          .then(response =>{
            self.setState({
              products: response.data.result,
              productCount: response.data.count
            })})
            .catch(error => console.log(error))
      }
    }, 1500)

    function getFilterQueries(queries){
      const {category, subType} = self.props.match.params;
      const pageInfo = self.props.pageInfo;
      const filters = queryString.parse(self.props.history.location.search)
      let _qs = `?category=${category}${subType ? '&subType=' + subType : ''}&pageNum=${pageInfo.pageNum}&limit=${pageInfo.productsPerPage}`;
      Object.keys(filters).forEach(key=>{
        if(filters[key]){
          _qs += `&${key}=${filters[key]}`
        }
      })
      return _qs;
    }
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
          <DisplayGrid  {...this.props} products={this.state.products}/>
          {this.state.products ? <Pagination match={this.getPageRouteInfo()} totalPages={this.getTotalPages()} pageNumber={this.props.pageInfo.pageNum} spread={12/2} /> : <></>}
        </div>
      </>
    );
  }

}

function DisplayGrid(props) {
  console.log(props.productCount)
    return (
        props.products ?
        props.products.length ?
        <div id="product-section">
          <div id="product-grid" >
            <GridItem {...props} />
          </div>
        </div>
        : 'sorry no products'
        : <Loading/>
      )
  }

export default ProductsDisplayGrid;
