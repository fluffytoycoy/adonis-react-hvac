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
      ],
      powerFilter: '',
      sideFilter: '',
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

  setPowerFilter =(e) =>{
    if(!e){
      this.setState({
        powerFilter: ''
      })
    }else{
      this.setState({
        powerFilter: e.value
      })
    }
  }

  setSideFilter = (e) =>{
    if(!e){
      this.setState({
        sideFilter: ''
      })
    }else{
      this.setState({
        sideFilter: e.value
      })
    }
  }

  render(){
      return (
        <div>
            <form className="filters">
              <div>
                <label>Power Options</label>
                <Select styles={dotStyles} onChange={this.setPowerFilter}  isClearable={true} className='select'  options={this.state.powerOptions}/>
              </div>
              <div>
                <label>Side Options</label>
                <Select styles={normalStyles} onChange={(select)=>console.log(select ? select.value : '', )} isClearable={true} options={this.state.sideOptions} className='select'/>
              </div>
              <div>
                <label>Side Options</label>
                <Select styles={normalStyles} isClearable={true} options={this.state.sideOptions} className='select'/>
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

const fontWeight = {
  fontWeight: 700
}

const normalStyles={
option: (styles)=>{
  return {...styles, ...fontWeight}
},
singleValue: (styles) => ({ ...styles, ...fontWeight, height: 18 }),
}

const dotStyles = {
control: (styles, {isFocused, isSelected, isActive, isHover}) => ({ ...styles,
  backgroundColor: 'white',
  ':hover': {
    borderColor: 'lightblue'
  }
}),
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
    ...fontWeight,
    ':active': {
      ...styles[':active'],
      backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),

    },
  };
},
input: styles => ({ ...styles}),
placeholder: styles => ({ ...styles }),
singleValue: (styles, { data, value }) => ({ ...styles, ...dot(data.color), ...fontWeight, height: 18}),

};



export default GridItem
