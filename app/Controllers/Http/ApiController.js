'use strict';

const Products = use('App/Models/Products');

class ApiController {
  async getProductByType({request}) {
    const numOfItems = parseInt(request.params.itemsPerPage);
    const offset = (request.params.pageNum - 1) * numOfItems;

    console.log( numOfItems )
    console.log(offset)
    const productType = request.params.productType;
    let productPayload = {};

    productPayload.result = await Products
      .filter(product=> product.productType === productType)
    productPayload.count = productPayload.test.length;
    console.log(numOfItems + offset)
    productPayload.result= productPayload.result.slice(offset, (numOfItems + offset));
    return productPayload;
  }

}

module.exports = ApiController;
