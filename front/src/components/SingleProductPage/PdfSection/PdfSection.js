import React from 'react';


function PdfSection(props){
  return (
    <div className="downloads float card">
      <PdfButtons iframeOpen={props.iframeOpen} toggleiframe={props.toggleiframe} manualSrc={props.manualSrc} />
      <iframe title="product-pdf" className={`${props.iframeOpen ? 'open' : ''}`}src="" name="myFrame" ></iframe>
    </div>
  )
}

function PdfButtons(props){
  console.log(props)
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
  <div className="open-buttons">
    <a onClick={props.toggleiframe} href={props.manualSrc} target="myFrame">close</a>
  </div>)
}

function ClosedPdfButtons(props){
  return(
  <div className="closed-buttons">
    <a onClick={props.toggleiframe} href={props.manualSrc} target="myFrame">open</a>
  </div>)
}

export default PdfSection;
