import React, {Component } from 'react';
import axios from 'axios';

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
    return (
      <div className="container product">
        <h1>{this.props.selectedProduct ? this.props.selectedProduct.name : 'none'}</h1>

      </div>
    );
  }
}



export default SingleProductPage;
