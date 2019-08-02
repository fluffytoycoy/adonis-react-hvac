import React from 'react';
import ModelDetails from './ModelDetails/ModelDetails';
import PdfSection from './PdfSection/PdfSection';
import BulletPoints from './BulletPoints/BulletPoints';
import Loading from '../../../Utils/Loading/Loading'

function ProductInfo(props){
  const product = props.selectedProduct
  return(<>
    {props.selectedProduct ?
    <>
      <div className="single-product">
        <div className="img-wrapper grill">
          <img src={`${product.imgSrc}`} alt={product.name}/>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p>{product.details.info}</p>
        </div>
      </div>
      <div className="extra-info-columns">
        <BulletPoints bulletPoints={product.details.bulletPoints}/>
        <ModelDetails handleModelChange={props.handleModelChange}  modelOptions={props.modelOptions} selectedModel={props.selectedModel}/>
      </div>
    </>
    : <Loading/>}</>)
}

export default ProductInfo;