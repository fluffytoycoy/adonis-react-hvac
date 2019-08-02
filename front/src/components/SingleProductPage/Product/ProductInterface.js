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
        _isMounted: false,
        animate: false
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

export default ProductInterface;
