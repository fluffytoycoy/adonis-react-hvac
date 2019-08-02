import React, {Component } from 'react';
import axios from 'axios';
import ModelDetails from './ProductInfo/ModelDetails/ModelDetails';
import PdfSection from './ProductInfo/PdfSection/PdfSection';
import Loading from '../../Utils/Loading/Loading';
import { Redirect } from 'react-router-dom'
import NotFound from '../../NotFound/NotFound'

class ProductInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModel: {},
      modelOptions: [],
      redirect: false,
      _isMounted: false
    };
    this.handleModelChange = this.handleModelChange.bind(this);
  };

  componentWillMount() {
    this.setState({
      _isMounted: true
    },()=> {
      this.getProductInfo()
    })
  }

  getProductInfo(){
    if (!this.props.selectedProduct) {
      const self = this;
      setTimeout(function() {
        if(self.state._isMounted){
          axios.get(`/api/v1/getProductById/${self.props.match.params.item}`)
            .then(response =>
              self.props.productSelected(response.data)
            )
            .then(selectedProduct=>
              self.setModelDetails(selectedProduct.models[0])
            )
            .catch(error =>
              self.setState({
                redirect: true
              }))
        }
      }, 1000)
    } else{
      this.setModelDetails(this.props.selectedProduct.models[0])
    }

  }

  setModelDetails(model){
    var self = this;
    this.setState({
      selectedModel: model,
    }, getModelOptions())

    function getModelOptions(){
      console.log(self)
      const modelOptions = self.props.selectedProduct.models.map(model =>
        {return {label: model.name, value: model.name }}
      )
      self.setState({
        modelOptions: modelOptions
      })
    }
  }

  handleModelChange(e){
    if(this.state.selectedModel  !== e.value){
      const selectedModel = this.props.selectedProduct.models.find(model=> model.name === e.value)
      this.setState({
        selectedModel: selectedModel
      })
    }
  }

  componentWillUnmount(){
    this.state._isMounted = false;
  }

  }

  function ProductBulletPoints(props){
    return (
      <div  className="bullet-points float">
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

  function ProductInfo(props){
    const product = props.selectedProduct
    return(<>
      {props.selectedProduct ?
      <>
        <div className="single-product">
          <div className="img-wrapper">
            <img src={`${product.imgSrc}`} alt={product.name}/>
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p>{product.details.info}</p>
          </div>
        </div>
        <div className="extra-info-columns">
          <ProductBulletPoints bulletPoints={product.details.bulletPoints}/>
          <ModelDetails handleModelChange={props.handleModelChange}  modelOptions={props.modelOptions} selectedModel={props.selectedModel}/>
          <PdfSection manualSrc={props.selectedModel.manualSrc}/>
        </div>
      </>
      : <Loading/>}</>)
  }

export default ProductInterface;
