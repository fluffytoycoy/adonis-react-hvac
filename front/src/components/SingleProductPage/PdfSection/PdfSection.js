import React from 'react';


function PdfSection(props){
  console.log('test')
  return (
    <div className="downloads float card">
      <PdfButtons iframeOpen={props.iframeOpen} toggleiframe={props.toggleiframe} manualSrc={props.manualSrc} />
      <iframe title="product-pdf" className={`${props.iframeOpen ? 'open' : ''}`} src={`${props.iframeOpen ? props.manualSrc : ''}`} name="myFrame" ></iframe>
    </div>
  )
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
