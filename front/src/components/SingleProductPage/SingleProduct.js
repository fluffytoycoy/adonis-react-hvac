import React, {Component } from 'react';
import axios from 'axios';
import './SingleProduct.scss';

import ModelDetails from './ModelDetails';

///import NotFound from './components/NotFound/NotFound';

class SingleProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModel: '',
      modelOptions: [],
    };
    this.handleModelChange = this.handleModelChange.bind(this);
  };

  componentWillMount() {
  if (!this.props.selectedProduct) {
    const self = this;
    setTimeout(function() {
      axios.get(`/api/v1/getProductById/${self.props.match.params.item}`)
        .then(response =>
          self.props.productSelected(response.data)
        )
        .then(selectedProduct=>
          self.setState({
            selectedModel: selectedProduct.models[0].name
          }, self.getModelOptions())
        )
        .catch(error =>
          console.log(error)
        )
    }, 1000)
  } else{
    this.setState({
      selectedModel: this.props.selectedProduct.models[0].name
    }, this.getModelOptions())
  }
}

  getModelOptions(){
    const modelOptions = this.props.selectedProduct.models.map(model =>
      {return {label: model.name, value: model.name }}
    )
    this.setState({
      modelOptions: modelOptions
    })
  }

  handleModelChange(e){
    console.log(e.value)
    if(this.state.selectedModel  !== e.value){
      this.setState({
        selectedModel: e.value
      })
    }
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
            <ModelDetails handleModelChange={this.handleModelChange} modelOptions={this.state.modelOptions}/>
            <div className="card">
              <h2>MODEL NUMBER: {this.state.selectedModel.name}</h2>
              <div className="table">
                <div>
                  <h3>width</h3>
                  <h3>{this.state.selectedModel.width}</h3>
                </div>
                <div>
                  <h3>height</h3>
                  <h3>{this.state.selectedModel.height}</h3>
                </div>
                <div>
                  <h3>depth</h3>
                  <h3>{this.state.selectedModel.depth}</h3>
                </div>
                <div>
                  <h3>viewingArea</h3>
                  <h3>{this.state.selectedModel.viewingArea}</h3>
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
