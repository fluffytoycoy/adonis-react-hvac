import React, {Component} from 'react';



class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      visable: []
    };
  };

  componentWillMount(){
    //this.loadGridItems(this.props.products);
  }

  componentWillReceiveProps(newprops){
    clearInterval(this.state.interval);
    this.setState({
      products: newprops.products,
      loading: true,
      visable: []
    }, () => this.loadGridItems(newprops.products))
  }



  loadGridItems(items) {
    const self = this;
    var i = 0;
    var intervalId = setInterval(function() {
      if (i >= items.length) {
        console.log('in here')
        clearInterval(intervalId);
      } else {
        self.setState({
          visable: [...self.state.visable, 'test'],
        }, ()=> console.log(self.state.visable))
        i++;
      }
      console.log('test')
    }, 100);

  }

  linkToProduct(){
    //push history

    this.props.history.push(this.props.history.location.pathname + '/1')
  }

  displayTimeout(time){
    const self = this;
      const interval = setTimeout(function() {
    self.setState({
      visable: {...self.state.visable, [time]: 'yes' }
    })
    console.log('this')
  }, time * 100000)
  }

  renderItem(){

  }

  render(){
    const products = this.state.products.map((product, index)=>(
     //this.displayTimeout(index)
          <div onClick={this.linkToProduct}key={index} className={`bg-img ${this.state.visable[index]}`} style={{ background: `url(${product.imgSrc})`}}>
            <h1>{product.name}</h1>
          </div>

  ));
      return <>{products}</>
  }
}

export default GridItem
