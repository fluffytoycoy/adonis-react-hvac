import React, {Component} from 'react';
import Select from 'react-select';
import SwitchFilters from './SwitchFilters'
import './Filters.scss';
import queryString from 'query-string'

function Filters(props) {
      return (
        <SwitchFilters {...props} />
      )
}


export default Filters
