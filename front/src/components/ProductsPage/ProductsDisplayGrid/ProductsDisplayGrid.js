import React, {Component} from 'react';
///import NotFound from './components/NotFound/NotFound';
import GridItem from './GridItem';
import './ProductsDisplayGrid.scss';
import Filters from './Filters/Filters';
import Pagination from 'react-router-pagination';
import axios from 'axios';

class ProductsDisplayGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelection: '',
      products: undefined,
    };
  };

  getAllProducts () {
    var self = this;

    setTimeout(function() {
    axios.get(`/api/v1/getProductsByType?type=${self.state.currentSelection}&pageNum=${self.props.page}&limit=${self.props.limit}`)
        .catch(error => console.log(error))
        .then(response =>
          self.setState({
          products: response.data.result,
        }, console.log(response)))
    }, 1000)
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
    console.log('gets props')
    //this handles forward and backwards movement routing browser
    if(this.state.currentSelection !== newprops.selectedType || true){
      this.setState({
        currentSelection: newprops.selectedType,
        products: undefined
      }, ()=> {
        console.log('test')
        this.getAllProducts()
      })
    }
  }

  isLoading(){
    return this.state.products.length
  }

  getPageInfo(){
    return {path: '/products/:type/:pageNumber/:offset', params: {type: this.state.currentSelection, offset: this.props.limit}}
  }

  handleFilter = async (submitEvent) =>{
    submitEvent.preventDefault();
    console.log('yes')
  }

  render(){
    return (
      <div className="product-grid-wrapper">
        <Filters currentSelection={this.state.currentSelection}/>
        <DisplayGrid productSelected={this.props.productSelected} products={this.state.products} history={this.props.history}/>
        <Pagination match={this.getPageInfo()} totalPages={2} pageNumber={this.props.page} spread={12/2} />
      </div>
    );
  }

}



function DisplayGrid(props) {
  return props.products ?   <div id="product-section">
      <div id="product-grid" >
        <GridItem productSelected={props.productSelected} products={props.products} history={props.history} />
      </div>
    </div> : <>loading</>

  }



export default ProductsDisplayGrid;
