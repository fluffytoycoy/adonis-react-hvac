import React, {Component} from 'react';
import Select from 'react-select';
import {dotStyles, normalStyles} from './FilterStyles'

import queryString from 'query-string'

class FilterInterface extends Component {
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
  }



export default FilterInterface
