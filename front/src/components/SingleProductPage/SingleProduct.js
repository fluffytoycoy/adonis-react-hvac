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
      <div className="container single-product-wrapper">
        <div className="single-product card">
            <img src={`${product.imgSrc}`} alt={product.name}/>
          <div className="product-info">
            <h1>{product.name}</h1>
            <h2>{product.details.info}</h2>
          </div>
        </div>
        <div className="extra-info-columns">
          <div className="bullet-points card">
            <ProductBulletPoints bulletPoints={product.details.bulletPoints}/>
        </div>
        <div className="product-specs">
          <div className="models card">
            <h2>Change Model:</h2>
            <select>
              <option>RUTH-36</option>
              </select>
              </div>
            <div className="card">
              <h2>MODEL NUMBER: {product.models[0].name}</h2>
              <div className="table">
                <div>
                  <h3>width</h3>
                  <h3>{product.models[0].width}</h3>
                </div>
                <div>
                  <h3>height</h3>
                  <h3>{product.models[0].height}</h3>
                </div>
                <div>
                  <h3>depth</h3>
                  <h3>{product.models[0].depth}</h3>
                </div>
                <div>
                  <h3>viewingArea</h3>
                  <h3>{product.models[0].viewingArea}</h3>
                </div>
            </div>
          </div>

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
