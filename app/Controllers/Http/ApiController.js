'use strict';

const Products = use('App/Models/Products');

class ApiController {
  getCities() {
    return Products.filter(product=> product.sides === 'single')
  }
}

module.exports = ApiController;
