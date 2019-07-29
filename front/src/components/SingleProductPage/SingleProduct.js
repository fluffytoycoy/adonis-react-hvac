import React, {Component } from 'react';
import axios from 'axios';
import './SingleProduct.scss';
import ModelDetails from './ModelDetails/ModelDetails';
import PdfSection from './PdfSection/PdfSection';
import Loading from '../Utils/Loading/Loading';

class SingleProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModel: {},
      modelOptions: [],
      iframeOpen: '',
    };
    this.handleModelChange = this.handleModelChange.bind(this);
    this.toggleiframe = this.toggleiframe.bind(this);
  };

  componentWillMount() {
    console.log(this.props)
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

  toggleiframe(){
    this.setState({
      iframeOpen: !this.state.iframeOpen
    })
  }

  componentWillReceiveProps(nextProps){

  }

  render() {
    const product = this.props.selectedProduct
    return (
      <div className="container single-product-wrapper">


        {this.props.selectedProduct ?
          <>
          <div className="single-product card">
            <img src={`${product.imgSrc}`} alt={product.name}/>
          <div className="product-info">
            <h1>{product.name}</h1>
            <h2>{product.details.info}</h2>
          </div>
        </div>
        <div className="extra-info-columns">
          <ProductBulletPoints bulletPoints={product.details.bulletPoints}/>
          <ModelDetails handleModelChange={this.handleModelChange}  modelOptions={this.state.modelOptions} selectedModel={this.state.selectedModel}/>
          <PdfSection
            manualSrc={this.state.selectedModel.manualSrc}
            toggleiframe={this.toggleiframe}
            iframeOpen={this.state.iframeOpen}
            bsProp={'bsProp'}/>
        </div>
        </>
        : <Loading/>}
      </div>
    );
  }
}

function ProductBulletPoints(props){
  return (
    <div  className="bullet-points card float">
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
