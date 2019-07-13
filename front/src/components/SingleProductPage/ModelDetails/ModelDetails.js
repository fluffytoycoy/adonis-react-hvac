import React from 'react';
import ModelSelection from './ModelSelection';

function ModelDetails(props){
  console.log(props.selectedModel)
  return (
    <div className="product-specs float">
      <ModelSelection
        handleModelChange={props.handleModelChange}
        modelOptions={props.modelOptions}
        selectedModel={props.selectedModel}
      />
      <div className="card">
        <h2>MODEL NUMBER: {props.selectedModel.name}</h2>
        <div className="table">
            <div>
              <h3>width</h3>
              <h3>{props.selectedModel.width}</h3>
            </div>
            <div>
              <h3>height</h3>
              <h3>{props.selectedModel.height}</h3>
            </div>
            <div>
              <h3>depth</h3>
              <h3>{props.selectedModel.depth}</h3>
            </div>
            <div>
              <h3>viewingArea</h3>
              <h3>{props.selectedModel.viewingArea}</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModelDetails;
