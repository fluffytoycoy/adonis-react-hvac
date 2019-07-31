import React from 'react';
import Select from 'react-select';
import {dotStyles, normalStyles} from './FilterStyles'
import FilterInterface from './FilterInterface'

class GrillFilters extends FilterInterface {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleSubmit(e){
    super.submit(e)
    this.props.filterToggle();
  }

  render(){
      return (
            <form className={`filters ${this.props.className}`}>
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

              <div className="submit-wrapper">
              {this.state.updateSearch ? <p>Update Search</p> : <></>}
                <div className='submit-btn' onClick={this.handleSubmit}>Search</div>
              </div>
              </div>
          </form>
      )

  }
}


export default GrillFilters
