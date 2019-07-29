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
    // this.setState({
    //   visable: [],
    // }, () => this.addAnimationToGridItems(this.props.products))
  }

  componentDidMount(){
    this.setState({
      mounted: true
    })
  }

  componentWillReceiveProps(newprops){
    //everytime new selection is made load new products and set visablity to none
    //then add visablity
    // this.setState({
    //   visable: []
    // }, () => this.addAnimationToGridItems(newprops.products))
  }



  addAnimationToGridItems(items) {
    //Interval for adding the visable class to each product on page
    const self = this;
    var i = 0;
    var intervalId = setInterval(function() {
      if (i >= items.length) {
        clearInterval(intervalId);
      } else {
        self.setState({
          visable: [...self.state.visable, 'test'],
        })
        i++;
      }
    }, 100);

  }

  linkToProduct(e){
    //push history the selected product page
    const productId = e.target.getAttribute('data-id');
    const index = e.target.getAttribute('data-index');
    console.log(productId)
    this.props.productSelected(this.props.products[index])
    this.props.history.push('/product/' + productId)
  }


  render(){
    const products = this.props.products.map((product, index)=>{
      const itemStyle = { background: `url(${product.imgSrc})`, transitionDelay: `${index*100}ms`};

      return(
      <CSSTransition
        in={this.state.mounted}
        classNames="grid-item"
        timeout={0}
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
