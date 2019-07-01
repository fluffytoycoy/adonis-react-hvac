import React, {Component} from 'react';



class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  };

  componentWillMount(){
    console.log('fuck')
    //this.loadGridItems(this.props.products);
  }

  componentWillReceiveProps(newprops){
    clearInterval(this.state.interval);
    this.setState({
      products: [],
      load: false
    }, () => this.loadGridItems(newprops.products))


  }

  loadGridItems(items) {
    const self = this;
    var i = 0;
    self.setState({
      interval: intervalId
    })
    var intervalId = setInterval(function() {
      if (!self.state.load && i >= items.length) {
        console.log('clicked end loop')
        clearInterval(intervalId);
      } else {
        self.setState({
          products: [...self.state.products, items[i]],
          loaded: 'loaded'
        })
        i++
      }
    }, 100);

  }

  linkToProduct(){
    //push history
    this.props.history.push(this.props.history.location.pathname + '/1')
  }

  renderItem(products){
    return products.map((product, index)=>{
        return (
          <div onClick={this.linkToProduct}key={index} className="bg-img" style={{background: `url(${product.imgSrc})`}}>
            <h1>{product.name}</h1>
          </div>
      )
    })
  }

  render(){
      return this.renderItem(this.state.products)
  }
}

export default GridItem
