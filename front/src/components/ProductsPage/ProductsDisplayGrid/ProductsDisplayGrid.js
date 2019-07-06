import React, {Component} from 'react';
///import NotFound from './components/NotFound/NotFound';
import GridItem from './GridItem';
import './ProductsDisplayGrid.scss';
import Filters from './Filters/Filters';
import axios from 'axios';

class ProductsDisplayGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelection: '',
      products: [],
    };
  };

  getAllProducts () {
    var self = this;
    setTimeout(function() {
    axios.get(`/api/v1/${self.state.currentSelection}`)
        .catch(error => console.log(error))
        .then(response => self.setState({
          products: response.data,
        }))
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
    //this handles forward and backwards movement routing browser
    if(this.state.currentSelection !== newprops.selectedType){
      this.setState({
        currentSelection: newprops.selectedType,
        products: []
      },()=> {
        this.getAllProducts()
      })
    }
  }

  isLoading(){
    return this.state.products.length
  }

  handleFilter = async (submitEvent) =>{
    submitEvent.preventDefault();
    console.log('yes')
  }

  render(){
    return (
      <div className="product-grid-wrapper">
        <Filters currentSelection={this.state.currentSelection}/>
        <DisplayGrid products={this.state.products}/>
      </div>
    );
  }

}

function DisplayGrid(props) {
  return props.products.length ?   <div id="product-section">
      <div id="product-grid" >
        <GridItem products={props.products} />
      </div>
    </div> : <>no</>

  }



export default ProductsDisplayGrid;
