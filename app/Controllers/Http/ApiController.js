'use strict';

const Products = use('App/Models/Products');

class ApiController {
  getWood() {
    return Products.filter(product=> product.sides === 'single')
  }

  getGas(){
    return Products;
  }

  getElectric(){
    return Products.filter(product=> product.sides === 'double')
  }

  getOutdoors(){
    return Products.filter(product=> product.sides === 'single')
  }
}

module.exports = ApiController;
