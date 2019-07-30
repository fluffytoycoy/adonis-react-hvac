import React, {Component} from 'react';
import Select from 'react-select';
import {dotStyles, normalStyles} from './FilterStyles'
import FilterInterface from './FilterInterface'

class GrillFilters extends FilterInterface {
  constructor(props) {
    super(props);
  };

  render(){
      return (
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
                <label>Type Options</label>
                <Select
                  styles={normalStyles}
                  isClearable={true}
                  onChange={this.setSubType}
                  value={this.state.queries.subType}
                  options={this.state.filterOptions.subType}
                  className='select'/>
              </div>

              <div className="submit-wrapper">
              {this.state.updateSearch ? <p>Update Search</p> : <></>}
                <div className='submit-btn' onClick={this.submit}>Search</div>
              </div>
          </form>
      )

  }
}


export default GrillFilters
