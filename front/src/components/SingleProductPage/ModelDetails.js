import React from 'react';

function ModelDetails(){
  return (
    <div className="card">
      <h2>MODEL NUMBER: {this.state.selectedModel.name}</h2>
      <div className="table">
        <div>
          <h3>width</h3>
          <h3>{this.state.selectedModel.width}</h3>
        </div>
        <div>
          <h3>height</h3>
          <h3>{this.state.selectedModel.height}</h3>
        </div>
        <div>
          <h3>depth</h3>
          <h3>{this.state.selectedModel.depth}</h3>
        </div>
        <div>
          <h3>viewingArea</h3>
          <h3>{this.state.selectedModel.viewingArea}</h3>
        </div>
    </div>
  </div>
  )
}

export default ModelDetails;
