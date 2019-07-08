'use strict';

const Products = use('App/Models/Products');

class ApiController {
  async getProductsByType({request}) {
    console.log(request._qs)
    const numOfItems = parseInt(request._qs.limit);
    const offset = (request._qs.pageNum - 1) * numOfItems;
    const productType = request._qs.type;
    let productPayload = {};
    productPayload.result = await Products
      .filter(product=> product.productType === productType)
    productPayload.count = productPayload.result.length;
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
