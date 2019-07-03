import React, {Component} from 'react';
import Select from 'react-select';
import './Filters.scss';
import chroma from 'chroma-js';

class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerOptions: [
        {label: "Low", value: 1, color: 'orange'},
        {label: "High", value: 2, color: 'red'}
      ],
      sideOptions: [
        {label: 'Front Facing', value: 1},
        {label: 'Double Sided', value: 2}
      ]
    };
  };

  componentWillReceiveProps(newprops){
    //everytime new selection is made load new products and set visablity to none
    //then add visablity

  }

  componentWillUnmount(){
    console.log('test')
  }


  addAnimationToGridItems(items) {

  }

  linkToProduct(e){
    //push history the selected product page
  }



  render(){
    console.log(this.props.currentSelection)
      return (
        <div>
            <form className="filters">
              <div>
                <label className="label">Power Options</label>
                <Select isClearable={true} onChange={()=>console.log()}className='select' styles={colourStyles} options={this.state.powerOptions} label='select'/>
              </div>
              <div>
                <label>Side Options</label>
                <Select isClearable={true} options={this.state.sideOptions} className='select'/>
              </div>
              <div className="submit-wrapper"><div className='submit-btn' onClick={()=>console.log('test')}>Search</div></div>
          </form>
        </div>
      )

  }
}

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const valuetest = (value, data) =>{
  console.log(value)
  return  value === 0 ? {} : {...dot(data.color)}

}

const fontWeight = {
  fontWeight: 700
}

const placeholder= () =>({

})

const colourStyles = {
control: styles => ({ ...styles, backgroundColor: 'white' }),
option: (styles, { data, value, isDisabled, isFocused, isSelected }) => {
  const color = chroma(data.color);
  return {
    ...styles,
    backgroundColor: isDisabled
      ? null
      : isSelected
      ? data.color
      : isFocused
      ? color.alpha(0.1).css()
      : null,
    color: isDisabled
      ? '#ccc'
      : isSelected
      ? chroma.contrast(color, 'white') > 2
        ? 'white'
        : 'black'
      : data.color,
    cursor: isDisabled ? 'not-allowed' : 'default',
    fontWeight: 700,

    ':active': {
      ...styles[':active'],
      backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
    },
  };
},
input: styles => ({ ...styles, ...dot()}),
placeholder: styles => ({ ...styles, ...fontWeight  }),
singleValue: (styles, { data, value }) => ({ ...styles, ...valuetest(value, data), ...fontWeight }),
};



export default GridItem
