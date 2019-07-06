'use strict';

const Products = use('App/Models/Products');

class ApiController {
  async getProductByType({request}) {
    const productType = request.params.productType;
    console.log(productType)
    return await Products.filter(product=> product.productType === productType)
  }
  async getWood() {
    return await Products.filter(product=> product.sides === 'single')
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
