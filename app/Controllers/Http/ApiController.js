'use strict';

const Products = use('App/Models/Products');

class ApiController {
  async getProductsByType({request}) {
    const numOfItems = parseInt(request.params.itemsPerPage);
    const offset = (request.params.pageNum - 1) * numOfItems;
    const productType = request.params.productType;
    let productPayload = {};

    productPayload.result = await Products
      .filter(product=> product.productType === productType)
    productPayload.count = productPayload.test.length;
    productPayload.result= productPayload.result.slice(offset, (numOfItems + offset));
    return productPayload;
  }

  async getProductById({request}) {
    const productId = parseInt(request.params.id);
    const productPayload = await Products.find(product => product.id === productId)
    return productPayload;
  }
}

module.exports = ApiController;
