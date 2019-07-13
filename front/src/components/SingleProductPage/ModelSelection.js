import React from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';

function ModelSelection(props){

    return (
      <div className="models card">
        <h2>Change Model:</h2>
        <Select
          className="model-select"
          value={props.modelOptions[0]}
          onChange={props.handleModelChange}
          options={props.modelOptions}/>
      </div>
    );
}

export default ModelSelection;
