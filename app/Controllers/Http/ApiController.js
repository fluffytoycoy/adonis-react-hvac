'use strict';
try{
  const Products = use('App/Models/Products');
}catch (e) {
  console.log(e)
}
const Products = use('App/Models/Products');
const Email = use('App/Util/Email');
const axios = use('axios');

class ApiController {
  async getProductsByType({request}) {
    //DEV: CONSOLE.LOG THE REQEST QS
    const {power, sides, category, subType} = request._qs;
    let productPayload = {};
    //START: page info
    const numOfItems = parseInt(request._qs.limit);
    const offset = (request._qs.pageNum - 1) * numOfItems;
    //END: page info
    //filter based on heating and sides
    console.log(subType)
    productPayload.result = await Products
      .filter(product=> (
        (category === product.category)
        && (subType === undefined || subType === product.subType)
        && (power === undefined || product.HeatingPower === power)
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

  async getReviews(){
    try{
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ20dqT1vl44cRJnqsDjGxYtw&fields=reviews&key=${process.env.GOOGLE_API}`);
      if(response.status === 200){
        return response.data.result.reviews;
      }
    }
    catch (error){
      console.log(error)
      return [];
    }
  }

  async submitContact({request}){
    var email = new Email();
    var mailOptions = {
      to: request._body.values.email,
      text: request._body.values.message
    };
    email.to(mailOptions).send();
  }
}

module.exports = ApiController;
