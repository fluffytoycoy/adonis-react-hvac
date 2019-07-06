'use strict';

const Products = use('App/Models/Products');

class ApiController {
  async getProductByType({request}) {
    const productType = request.params.productType;
    console.log(productType)
    return await Products.filter(product=> product.productType === productType)
  }

}

module.exports = ApiController;
