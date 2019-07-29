import React, {Component} from 'react';
import Select from 'react-select';
import './Filters.scss';
import queryString from 'query-string'
import chroma from 'chroma-js';

class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: {
        power: [
          {label: "Low", value: 'low', color: 'orange', filter:'power'},
          {label: "High", value: 'high', color: 'red', filter:'power'}
        ],
        sides: [
          {label: 'Front Facing', value: 'single', filter:'sides'},
          {label: 'Double Sided', value: 'double', filter:'sides'}
        ],
      },
      queries:{
        power: '',
        sides: '',
      },
      SearchUpdate: false,
    };
    this.setPowerFilter = this.setPowerFilter.bind(this);
    this.setSideFilter = this.setSideFilter.bind(this);
    this.submit = this.submit.bind(this);
  };

  componentWillMount(){
    // filters = {power: '', sides: ''}
      const filters = queryString.parseUrl(this.props.history.location.search).query;
      this.setQueryUrl(filters);
  }

  setQueryUrl(filters){
    //get acceptable queries for components
    let queries = {};
    const keys = Object.keys(this.state.queries)
    //for each acceptable query check the filterOptions for a matching url param value
    //set matching query key equal to filter option value or '' if param value is invalid
    for (const key of keys) {
      queries[key] = this.state.filterOptions[key].find(option=>{
        return option.value === filters[key]
      }) || ''
    }
    //set state of queries from acceptable url params
    this.setState({
      queries: queries
    })
    console.log(queries)
  }

  componentWillReceiveProps(newprops){
    //if new type is selected clear the selected query state
    if(newprops.selectedType !== this.props.selectedType){
      let emptyQuery = {};
      const keys = Object.keys(this.state.queries);
      for (const key of keys){
        emptyQuery[key] = '';
      }

      this.setState({
        queries: emptyQuery
      })
    }
  }

  linkToProduct(e){
    //push history the selected product page
  }

  setPowerFilter(e){
    this.setState(prevState =>({
      queries: {
        ...prevState.queries,
      power: e ? e : ''
    }
  }), ()=>{console.log(queryString.parse(this.props.history.location.search))})
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

  buildqueryStringFromState(){
    let query = {}
      const keys = Object.keys(this.state.queries)
      for (const key of keys) {
        if(this.state.queries[key]){
          query[key] = this.state.queries[key].value;
        }
      }
      return queryString.stringify(query);
  }

  addQuery(){
    this.props.history.push(`?${this.buildqueryStringFromState()}`);
  }

  submit(e){
    e.preventDefault()
    this.updateSearch(false);
    this.addQuery()
    //this.props.handleFilterSubmit(this.state.queries)

  }

  selectedOption(){
    return this.state.powerOptions.find(option => {
      return option.value === this.state.queries.powerFilter
    })
  }

  render(){
      return (
        <div>
            <form className="filters">
              <div>
                <label>Power Options</label>
                <Select
                  data-name='powerFilter'
                  isClearable={true}
                  className='select'
                  styles={dotStyles}
                  value={this.state.queries.power}
                  onChange={this.setPowerFilter}
                  options={this.state.filterOptions.power}
                />
              </div>
              <div>
                <label>Side Options</label>
                <Select
                  styles={normalStyles}
                  onChange={this.setSideFilter}
                  isClearable={true}
                  options={this.state.filterOptions.sides}
                  className='select'
                />
              </div>
              <div>
                <label>Side Options</label>
                <Select styles={normalStyles} isClearable={true} options={this.state.sideOptions} className='select'/>
              </div>

              <div className="submit-wrapper">
              {this.state.updateSearch ? <p>Update Search</p> : <></>}
                <div className='submit-btn' onClick={this.submit}>Search</div>
              </div>
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
