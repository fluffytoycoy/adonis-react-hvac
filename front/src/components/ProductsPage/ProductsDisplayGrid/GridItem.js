import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


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

  componentWillReceiveProps(){
    this.setState({
      mounted: false
    })
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
    const products = this.props.products.map((product, index)=>{
      const itemStyle = { background: `url(${product.imgSrc})`, transitionDelay: `${index*100}ms`};

      return(
      <CSSTransition
        in={this.state.mounted}
        classNames="grid-item"
        timeout={1000}
        key={product.id}>
          <div onClick={this.linkToProduct} data-id={product.id} data-index={index} className={`bg-img`} style={itemStyle}>
            <h1>{product.name}</h1>
          </div>
      </CSSTransition>)

  });
      return <>{products}</>
  }
}

export default GridItem
