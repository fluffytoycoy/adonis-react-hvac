import React from 'react';
import Select from 'react-select';

function ModelSelection(props){
  //selected value formated to select-react requirements
  const selectedValue = {label: props.selectedModel.name, value: props.selectedModel.name}

    return (
      <div className="models">
        <h2>Change Model:</h2>
        <Select
          className="model-select"
          value={selectedValue}
          onChange={props.handleModelChange}
          options={props.modelOptions}/>
      </div>
    );
}

export default ModelSelection;
