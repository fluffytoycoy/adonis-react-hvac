import React, {Component} from 'react';
///import NotFound from './components/NotFound/NotFound';
import GridItem from './GridItem';
import './ProductsDisplayGrid.scss';
import axios from 'axios';

class ProductsDisplayGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelection: '',
      products: [],
    };
  };

  getAllProducts() {
    var self = this;
    setTimeout(function() {
      axios.get(`/api/v1/${self.state.currentSelection}`)
        .catch(error => console.log(error))
        .then(response => self.setState({
          products: response.data,
        }))
    }, 0)
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


  handleFilter = async (submitEvent) =>{
    submitEvent.preventDefault();
    console.log('yes')
  }

  render(){
    return (
      <div className="product-grid-wrapper">
        <div id="product-section">
          <div id="product-grid" >
            <GridItem products={this.state.products} history={this.props.history}/>
          </div>
        </div>
      </div>
    );
  }

}




export default ProductsDisplayGrid;
