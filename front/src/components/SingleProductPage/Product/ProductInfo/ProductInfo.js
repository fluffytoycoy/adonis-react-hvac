import React, {Component} from 'react';
import ModelDetails from './ModelDetails/ModelDetails';
import PdfSection from './PdfSection/PdfSection';
import BulletPoints from './BulletPoints/BulletPoints';
import Loading from '../../../Utils/Loading/Loading'
import {CSSTransition} from 'react-transition-group';

class ProductInfo extends Component{
  constructor(props){
    super(props)
    this.state={
      _isMounted: false
    }
  }
  componentDidMount(){
    this.setState({
      _isMounted: true
    })
  }

  componentWillReceiveProps(newprops){
    var self = this
    //If new product props are sent reset the mounted state
    //This is needed otherwise the CSSTransition wont properly render GridItems
    this.setState({
      _isMounted: false
    }, ()=>{self.setState({
      _isMounted: true
    })})

  }

  render(){
    const product = this.props.selectedProduct
    return(<>
      {this.props.selectedProduct ?
      <>
        <div className="single-product">
          <CSSTransition in={this.state._isMounted}  classNames="loaded"  timeout={0}>
            <div className="img-wrapper grill">
              <img src={`${product.imgSrc}`} alt={product.name}/>
            </div>
          </CSSTransition>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p>{product.details.info}</p>
          </div>
        </div>
        <div className="extra-info-columns">
          <BulletPoints bulletPoints={product.details.bulletPoints}/>
          <ModelDetails handleModelChange={this.props.handleModelChange}  modelOptions={this.props.modelOptions} selectedModel={this.props.selectedModel}/>
          <PdfSection manualSrc={this.props.selectedModel.manualSrc} />
        </div>
      </>
      : <Loading/>}
      </>
    )
  }

}

export default ProductInfo;