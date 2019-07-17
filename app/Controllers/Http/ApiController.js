'use strict';

const Products = use('App/Models/Products');

class ApiController {
  async getProductsByType({request}) {
    //DEV: CONSOLE.LOG THE REQEST QS
    const {powerFilter, sides} = request._qs;
    let productPayload = {};
    //START: page info
    const numOfItems = parseInt(request._qs.limit);
    const offset = (request._qs.pageNum - 1) * numOfItems;
    const productType = request._qs.type;
    //END: page info

    console.log(powerFilter)
    //filter based on heating and sides
    productPayload.result = await Products
      .filter(product=> (
        product.productType === productType
        && (powerFilter === undefined || product.HeatingPower === powerFilter)
        && (sides === undefined || product.sides === sides)
      ))
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
