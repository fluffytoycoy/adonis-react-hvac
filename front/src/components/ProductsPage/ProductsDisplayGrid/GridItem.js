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
    clearInterval(this.state.interval);
    this.setState({
      products: newprops.products,
      loading: true,
      visable: []
    }, () => this.addAnimationToGridItems(newprops.products))
  }



  addAnimationToGridItems(items) {
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
    //push history
    const productId = e.target.getAttribute('data-key')
    this.props.history.push(this.props.history.location.pathname + '/' + productId)
  }

  displayTimeout(time){
    const self = this;
      const interval = setTimeout(function() {
    self.setState({
      visable: {...self.state.visable, [time]: 'yes' }
    })
  }, time * 100000)
  }

  renderItem(){

  }

  render(){
    const self = this;
    const products = this.state.products.map((product, index)=>(
     //this.displayTimeout(index)
          <div onClick={self.linkToProduct} key={index} data-key={index} className={`bg-img ${this.state.visable[index]}`} style={{ background: `url(${product.imgSrc})`}}>
            <h1>{product.name}</h1>
          </div>

  ));
      return <>{products}</>
  }
}

export default GridItem
