import React, {Component } from 'react';
import axios from 'axios';
import './SingleProduct.scss';
import ModelSelection from './ModelSelection';
import ModelDetails from './ModelDetails';

///import NotFound from './components/NotFound/NotFound';

class SingleProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModel: {},
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
            selectedModel: selectedProduct.models[0]
          }, self.getModelOptions())
        )
        .catch(error =>
          console.log(error)
        )
    }, 1000)
  } else{
    this.setState({
      selectedModel: this.props.selectedProduct.models[0]
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
    if(this.state.selectedModel  !== e.value){
      const selectedModel = this.props.selectedProduct.models.find(model=> model.name === e.value)
      this.setState({
        selectedModel: selectedModel
      })
    }
  }

  componentWillReceiveProps(nextProps){

  }

  render() {
    const product = this.props.selectedProduct
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
          <ProductBulletPoints bulletPoints={product.details.bulletPoints}/>
          <div className="product-specs">
              <ModelSelection
                handleModelChange={this.handleModelChange}
                modelOptions={this.state.modelOptions}
                selectedModel={this.state.selectedModel}
              />
              <ModelDetails selectedModel={this.state.selectedModel}/>

          </div>
        </div>
      </div>
      : 'loading'
    );
  }
}

function ProductBulletPoints(props){
  return (
    <div  className="bullet-points card">
      <ul>
        <ListItem bulletPoints={props.bulletPoints}/>
      </ul>
    </div>
  )

  function ListItem(){
    return (
    props.bulletPoints.map((bulletPoint, index)=>{
      return <li key={index}>{bulletPoint}</li>
    }))
  }
}



export default SingleProductPage;
