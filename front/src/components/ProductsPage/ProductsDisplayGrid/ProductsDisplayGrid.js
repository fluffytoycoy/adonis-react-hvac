import React, {Component} from 'react';
///import NotFound from './components/NotFound/NotFound';
import GridItem from './GridItem';
import './ProductsDisplayGrid.scss';
import axios from 'axios';

class ProductsDisplayGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: '',
      currentSelection: '',
      products: []
    };
  };

  getAllProducts(self) {
    axios.get(`/api/v1/${self.state.currentSelection}`)
      .catch(error => console.log(error))
      .then(response =>
        response.data.forEach((item, index) => {
          setTimeout(() => {
            console.log(item)
            self.setState({
              products: [...self.state.products, item],
              loaded: 'loaded'
            }, () => {
              console.log(self.state.products)
            })
          }, index * 200)
        })
      )
  }

  componentWillMount(){
    //on mount if exact route wasn't /products render with
    //minimized pictures
    console.log('mount ' + this.props.selectedType)
    const self = this;
    this.setState({
      currentSelection: this.props.selectedType
    }, ()=> {
      this.getAllProducts(this)
    })
    //calls api on load for product list

  }

  componentWillReceiveProps(newprops){
    //depending on the selected category props changing set fadeClass
    //this handles forward and backwards movement routing browser
    const currentSelection = this.state.currentSelection;
    if(currentSelection !== newprops.selectedType){
      this.setState({
        currentSelection: newprops.selectedType,
        products: []
      },()=> {
        this.getAllProducts(this)
      })
    }

    if(!newprops.selectedType){
      this.setState({
        fadeClass: '',
        loaded: 'loaded'
      })
    }else{
      this.setState({
        fadeClass: 'fade',
        loaded: 'loaded'
      })
    }
  }

  selection(value){
    //when a selection is made set fadeClass and push new location in history
    this.setState({
      fadeClass: 'fade'
    })
    // this.props.history.push(`/products/${value}`)
  }

  handleFilter = async (submitEvent) =>{
    submitEvent.preventDefault();
    console.log('yes')
  }

render(){
  return (
    <div id="product-section">
      <div className="filters">
        <form onSubmit={this.handleFilter}>
          <button type="submit"></button>
        </form>
      </div>
      <div id="product-grid" className={`${this.state.loaded}`}>
        <GridItem products={this.state.products} history={this.props.history}/>
      </div>
    </div>
  );
}

}




export default ProductsDisplayGrid;
