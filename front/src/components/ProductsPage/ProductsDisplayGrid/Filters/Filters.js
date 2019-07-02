import React, {Component} from 'react';



class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      visable: []
    };
  };

  componentWillReceiveProps(newprops){
    //everytime new selection is made load new products and set visablity to none
    //then add visablity

  }



  addAnimationToGridItems(items) {

  }

  linkToProduct(e){
    //push history the selected product page
  }

  render(){

      return <>Filters</>
  }
}

export default GridItem
