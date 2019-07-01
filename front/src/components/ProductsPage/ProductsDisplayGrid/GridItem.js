import React, {Component} from 'react';



function GridItem(props){

  return (props.products === undefined) ? 'undefined': renderItem(props.products)


  function linkToProduct(){
    //push history
    props.history.push(props.history.location.pathname + '/1')
  }

  function renderItem(products){
    return products.map((product, index)=>{
        return (
          <div onClick={linkToProduct}key={index} className="bg-img" style={{background: `url(${product.imgSrc})`}}>
            <h1>{product.name}</h1>
          </div>
      )
    })
  }
}

export default GridItem
