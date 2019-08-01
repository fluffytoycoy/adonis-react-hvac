import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import RandomColors from '../../Utils/GradientGenerator/RandomColors'

class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
    this.linkToProduct = this.linkToProduct.bind(this)
  };

  componentWillMount(){

  }

  componentDidMount(){
    this.setState({
      mounted: true
    })
  }

  componentWillReceiveProps(newprops){
    var self = this
    //If new product props are sent reset the mounted state
    //This is needed otherwise the CSSTransition wont properly render GridItems
    this.setState({
      mounted: false
    }, ()=>{self.setState({
      mounted: true
    })})

  }

  linkToProduct(e){
    //push history the selected product page
    const productId = e.target.getAttribute('data-id');
    const index = e.target.getAttribute('data-index');
    console.log(this.props.products[index])
    this.props.productSelected(this.props.products[index])
    this.props.history.push(`/Product/${this.props.products[index].category}/${productId}`)
  }


  render(){
    const linearGradient = new RandomColors();
    const products = this.props.products.map((product, index)=>{
    const itemStyle = { background: `url(${product.imgSrc}), ${linearGradient.generate()}`, transitionDelay: `${index*100}ms`};
      return(
      <CSSTransition
        in={this.state.mounted}
        classNames="grid-item"
        timeout={1000}
        key={product.id}>
          <div aria-label="Go To Product page for this item" onClick={this.linkToProduct} data-id={product.id} data-index={index} className={`bg-img`} style={itemStyle}>
            <h1>{product.name}</h1>
          </div>
      </CSSTransition>)

  });
      return <>{products}</>
  }
}

export default GridItem
