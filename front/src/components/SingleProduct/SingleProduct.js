import React, {Component } from 'react';
import axios from 'axios';

///import NotFound from './components/NotFound/NotFound';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: ''
    };
  };


  componentWillMount(){
    console.log(this.props.match.params.type + ' ' + this.props.match.params.item)
    }

  componentWillReceiveProps(nextProps){
      const currentSelection = this.props.match.params.type
      const nextSelection = nextProps.match.params.type
      if(currentSelection !== nextSelection){
        this.setState({
          selectedType: nextSelection
        })
      }
    }

  render() {
    return (
      <div className="container product">
        <h1>Single Product</h1>

      </div>
    );
  }
}

function ProductSection(props) {

  }



export default Products;
