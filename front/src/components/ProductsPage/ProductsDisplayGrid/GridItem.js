import React, {Component} from 'react';



class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      visable: []
    };
    this.linkToProduct = this.linkToProduct.bind(this)
  };

  componentWillReceiveProps(newprops){
    //everytime new selection is made load new products and set visablity to none
    //then add visablity
    this.setState({
      products: newprops.products,
      visable: []
    }, () => this.addAnimationToGridItems(newprops.products))
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
    const productId = e.target.getAttribute('data-key')
    this.props.history.push(this.props.history.location.pathname + '/' + productId)
  }

  render(){
    const products = this.state.products.map((product, index)=>(
          <div onClick={this.linkToProduct} key={index} data-key={index} className={`bg-img ${this.state.visable[index]}`} style={{ background: `url(${product.imgSrc})`}}>
            <h1>{product.name}</h1>
          </div>

  ));
      return <>{products}</>
  }
}

export default GridItem
