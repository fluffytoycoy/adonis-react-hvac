import React, {Component} from 'react';


class PdfSection extends Component{
  constructor(props){
    super(props);
    this.state ={
      iframeOpen: false,
    }
    this.toggleiframe = this.toggleiframe.bind(this)
  }

  toggleiframe(){
    this.setState({
      iframeOpen: !this.state.iframeOpen
    })
  }

  render(){
    return (
      <div className="downloads float card">
        <PdfButtons iframeOpen={this.state.iframeOpen} toggleiframe={this.toggleiframe} manualSrc={this.props.manualSrc} />
        <iframe title="product-pdf" className={`${this.state.iframeOpen ? 'open' : ''}`} src={`${this.state.iframeOpen ? this.props.manualSrc : ''}`} name="myFrame" ></iframe>
      </div>
    )
  }
}

function PdfButtons(props){
  return (
    <>
      {props.iframeOpen
        ? <ActivePdfButtons toggleiframe={props.toggleiframe} manualSrc={props.manualSrc} />
        : <ClosedPdfButtons toggleiframe={props.toggleiframe} manualSrc={props.manualSrc} />}
    </>
  )
}

function ActivePdfButtons(props){
  return(
  <div className="buttons">
    <a className="new-page-manual" href={props.manualSrc} target="_blank" rel="noopener noreferrer">Manual Page</a>
    <a className="close-btn" onClick={props.toggleiframe} href={props.manualSrc} target="myFrame">close</a>

  </div>)
}

function ClosedPdfButtons(props){
  return(
  <div className="buttons">
              <a className="new-page-manual" href={props.manualSrc} target="_blank" rel="noopener noreferrer" >Manual Page</a>
    <a className="open-btn" onClick={props.toggleiframe} href={props.manualSrc} target="myFrame">View Manual</a>
  </div>)
}

export default PdfSection;
