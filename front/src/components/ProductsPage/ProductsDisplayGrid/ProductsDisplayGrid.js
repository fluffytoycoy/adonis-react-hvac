import React, {Component} from 'react';
///import NotFound from './components/NotFound/NotFound';
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
          }, index * 1000)
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
    const self = this;
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

render(){
  return (
    <div>
    <div id="product-grid" className={`${this.state.loaded}`}>
      <Products products={this.state.products}/>
    </div>
    </div>
  );
}

}


function Products(props){
  return props.products === undefined ? 'undefined': delayRender(props.products)

  function delayRender(products){
    return products.map((product, index)=>{
        return (
          <div key={index} className=" bg-img">
            <h1>{product.name}</h1>
          </div>
      )
    })
  }

}

export default ProductsDisplayGrid;
