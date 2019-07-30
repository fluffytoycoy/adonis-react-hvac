import React, {Component} from 'react';
import FireplaceFilters from './FiltersComps/FireplaceFilters'
import GrillFilters from './FiltersComps/GrillFilters'

class SwitchFilters extends Component{
  constructor(props){
    super(props);
    this.state={
      filterOpen: false
    }
    this.FilterToggle = this.FilterToggle.bind(this)
    this.isFilterOpen = this.isFilterOpen.bind(this)
  }

  isFilterOpen(){
    console.log(this.state.filterOpen)
    return this.state.filterOpen ? 'open' : ''
  }

  FilterToggle(){
    this.setState({
      filterOpen: !this.state.filterOpen
    })
  }


  renderFilters(param){
    switch(param){
      case 'fireplace':
      return <FireplaceFilters className={this.isFilterOpen()} {...this.props}/>
      case 'grill':
      return <GrillFilters className={this.filterOptions}{...this.props}/>
      default:
      return <></>
    }
  }



  render(){
    console.log(this.props)
    return (
      <div>
        <div className="filter-btn" onClick={this.FilterToggle}>Filters</div>
        {this.renderFilters(this.props.match.params.category)}
      </div>
    )}
}

export default SwitchFilters;