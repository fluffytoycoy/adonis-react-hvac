import React, {Component } from 'react';

import axios from 'axios';
import ProductInfo from '../ProductInfo/ProductInfo';
import Loading from '../../../Utils/Loading/Loading';
import { Redirect } from 'react-router-dom'
import NotFound from '../../../NotFound/NotFound'

class Grill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModel: {},
      modelOptions: [],
      redirect: false
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
            self.setState({
              redirect: true
            })
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

  render() {
    return (
      <div className="container single-product-wrapper">
        {this.state.redirect ? <NotFound/> : <ProductInfo handleModelChange={this.handleModelChange} {...this.props} {...this.state}/>}
      </div>
      );
    }

}

export default Grill;
