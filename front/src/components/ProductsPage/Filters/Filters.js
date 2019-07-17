import React, {Component} from 'react';
import Select from 'react-select';
import './Filters.scss';
import chroma from 'chroma-js';

class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerOptions: [
        {label: "Low", value: 'low', color: 'orange', filter:'powerFilter'},
        {label: "High", value: 'high', color: 'red', filter:'powerFilter'}
      ],
      sideOptions: [
        {label: 'Front Facing', value: 'single', filter:'powerFilter'},
        {label: 'Double Sided', value: 'double', filter:'powerFilter'}
      ],
      queries:{
        powerFilter: '',
        sideFilter: '',
      },
      SearchUpdate: false,
    };
    this.setPowerFilter = this.setPowerFilter.bind(this);
    this.setSideFilter = this.setSideFilter.bind(this);
    this.submit = this.submit.bind(this);
  };

  componentWillReceiveProps(newprops){
    //everytime new selection is made load new products and set visablity to none
    //then add visablity

  }

  linkToProduct(e){
    //push history the selected product page
  }

  setPowerFilter(e){
    this.setState(prevState =>({
      queries: {
        ...prevState.queries,
      powerFilter: e ? e.value : ''
    }
    }))
  }

  setSideFilter(e){
    this.setState(prevState =>({
      queries: {
        ...prevState.queries,
      sideFilter: e ? e.value : ''
    }
  }),()=>{
      this.updateSearch(this.isQueryChanged(this.props.currentQuery));
  })
  }

  isQueryChanged(query){
    const currentQuery = this.state.queries;
    if(query.sideFilter === currentQuery.sideFilter
      && query.powerFilter === currentQuery.powerFilter){
        return false
      }else{
        return true;
      }
  }

  updateSearch(value){
    this.setState({
      updateSearch: value
    })
  }

  submit(e){
    e.preventDefault()
    this.props.handleFilterSubmit(this.state.queries)
  }

  render(){
      return (
        <div>
            <form className="filters">
              <div>
                <label>Power Options</label>
                <Select data-name='powerFilter' styles={dotStyles} onChange={this.setPowerFilter} isClearable={true} className='select'  options={this.state.powerOptions}/>
              </div>
              <div>
                <label>Side Options</label>
                <Select styles={normalStyles} onChange={this.setSideFilter} isClearable={true} options={this.state.sideOptions} className='select'/>
              </div>
              <div>
                <label>Side Options</label>
                <Select styles={normalStyles} isClearable={true} options={this.state.sideOptions} className='select'/>
              </div>
              {this.state.updateSearch ? <p>Update Search</p> : <></>}
              <div className="submit-wrapper"><div className='submit-btn' onClick={this.submit}>Search</div></div>
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
