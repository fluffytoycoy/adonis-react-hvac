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
    // const self = this;
    // //calls api on load for product list
    // axios.get('/api/v1/')
    //   .catch(error => console.log(error))
    //   .then(response =>
    //     setTimeout(() => {
    //       self.setState({
    //         products: response.data
    //       })
    //     }, 3000)
    //   )
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

  loadProducts = () => {
    if(this.state.products){
      return 'Loading...'
    }else{
      return this.state.products.toString()
    }
  }


  render() {
    return (
      <div className="container product">
        <div className="product-header">
          <h1>Products</h1>
        </div>
        <div className="product-grid-wrapper">
            <ProductTypes selectedType={this.state.selectedType} history={this.props.history} />
        </div>
        <div>
          <ProductSection type={this.state.selectedType} history={this.props.history}/>
        </div>
      </div>
    );
  }
}

function ProductSection(props) {
  const currentSelection = props.type;
  switch(currentSelection){
    case 'electric':
    return <ProductsDisplayGrid selectedType={currentSelection}/>
    break;
    case 'gas':
    return <ProductsDisplayGrid selectedType={currentSelection}/>
    break;
    case 'outdoors':
    return <ProductsDisplayGrid selectedType={currentSelection}/>
    break;
    case 'wood':
    return <ProductsDisplayGrid selectedType={currentSelection}/>
    break;
    default:
    return  <></>
  }

  function loadWoodProducts(){
    let data = {};
    //calls api on load for product list
    axios.get('/api/v1/')
      .catch(error => console.log(error))
      .then(response =>
          data = (response.data[0].name)
      )
      return data;
  }
}
export default Products;
