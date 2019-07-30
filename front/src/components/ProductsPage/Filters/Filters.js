import React, {Component} from 'react';
import Select from 'react-select';
import './Filters.scss';
import queryString from 'query-string'
import chroma from 'chroma-js';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: {
        power: [
          {label: "Low", value: 'low', color: 'orange', filter: 'power'},
          {label: "High", value: 'high', color: 'red', filter: 'power'}
        ],
        sides: [
          {label: 'Front Facing', value: 'single', filter: 'sides'},
          {label: 'Double Sided', value: 'double', filter: 'sides'}
        ],
        subType:[
          {label: 'Gas', value: 'gas', filter: 'sides'},
          {label: 'Electric', value: 'electric', filter: 'sides'},
          {label: 'Wood', value: 'wood', filter: 'sides'},
          {label: 'Outdoor', value: 'outdoor', filter: 'sides'}
        ],
      },
      queries:{
        power: '',
        sides: '',
        subType: '',
      },
      SearchUpdate: false,
    };
    this.setPowerFilter = this.setPowerFilter.bind(this);
    this.setSideFilter = this.setSideFilter.bind(this);
    this.setSubType = this.setSubType.bind(this);
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

  setPowerFilter(e){
    this.setState(prevState =>({
      queries: {
        ...prevState.queries,
      power: e ? e : ''
    }
  }), ()=>{
    this.updateSearch(true);
  })
  }

  setSideFilter(e){
    this.setState(prevState =>({
      queries: {
        ...prevState.queries,
      sides: e ? e : ''
    }
    }),()=>{
        this.updateSearch(true);
    })
  }

  setSubType(e){
    console.log(e)
    this.setState(prevState =>({
      queries: {
        ...prevState.queries,
        subType: e ? e : ''
      }
    }),()=>{
        this.updateSearch(true);
    })
  }

  isQueryChanged(query){
    //// TODO: function for changing update search bassed on the state being equal to the query params
    const currentQuery = this.state.queries;
    if(query.sides === currentQuery.sides
      && query.power === currentQuery.power){
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
    this.updateSearch(false);
    this.props.history.push(`?${buildQueryString(this.state)}`);

    function buildQueryString(state){
      let query = {}
        const keys = Object.keys(state.queries)
        for (const key of keys) {
          if(state.queries[key]){
            query[key] = state.queries[key].value;
          }
        }
        return queryString.stringify(query);
    }
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
                  value={this.state.queries.sides}
                  isClearable={true}
                  options={this.state.filterOptions.sides}
                  className='select'
                />
              </div>
              <div>
                <label>Type Options</label>
                <Select styles={normalStyles}
                  isClearable={true}
                  onChange={this.setSubType}
                  defaultValue={{label: 'test', value: 'test'}}
                  value={this.state.queries.subType}
                  options={this.state.filterOptions.subType}
                  className='select'/>
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



export default Filters
