import React, {Component} from 'react';
import Select from 'react-select';
import {dotStyles, normalStyles} from './FilterStyles'
import FilterInterface from './FilterInterface'

import queryString from 'query-string'


class FireplaceFilters extends FilterInterface {
  constructor(props) {
    super(props);

  };

  render(){
    console.log(this.props.className)
      return (
            <form className={`filters ${this.props.className}`} >
            <div>
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
                <label>Type Options</label>
                <Select
                  styles={normalStyles}
                  isClearable={true}
                  onChange={this.setSubType}
                  value={this.state.queries.subType}
                  options={this.state.filterOptions.subType}
                  className='select'/>
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

              <div className="submit-wrapper">
              {this.state.updateSearch ? <p>Update Search</p> : <></>}
                <div className='submit-btn' onClick={this.submit}>Search</div>
              </div>
            </div>
          </form>
      )
  }
}


export default FireplaceFilters