import React, {Component } from 'react';
import axios from 'axios';
import './SingleProduct.scss';

///import NotFound from './components/NotFound/NotFound';

class SingleProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: ''
    };
  };


  componentWillMount(){
    if(!this.props.selectedProduct){
      const self = this;
      setTimeout(function() {
      axios.get(`/api/v1/getProductById/${self.props.match.params.item}`)
          .catch(error => console.log(error))
          .then(response =>
            self.props.productSelected(response.data)).then(console.log('test'))
      }, 1000)
    }
    console.log(this.props.selectedProduct)
  }

  componentWillReceiveProps(nextProps){

    }

  render() {
    const product = this.props.selectedProduct
    console.log(product)
    return (
      this.props.selectedProduct ?
      <div className="single-product-wrapper">
        <div className="container single-product">
          <div className="product-images">
            <img src={`${product.imgSrc}`}/>
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <h2>{product.details.info}</h2>
            <ProductBulletPoints bulletPoints={product.details.bulletPoints}/>
          </div>
        </div>
      </div>
      : 'loading'
    );
  }
}

function ProductBulletPoints(props){
  return <ul>
    <ListItem bulletPoints={props.bulletPoints}/>
  </ul>

  function ListItem(){
    return props.bulletPoints.map((bulletPoint, index)=>{
      return <li key={index}>{bulletPoint}</li>
    })
  }
}



export default SingleProductPage;
