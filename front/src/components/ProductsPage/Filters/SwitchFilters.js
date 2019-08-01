import React, {Component} from 'react';
import FireplaceFilters from './FiltersComps/FireplaceFilters'
import GrillFilters from './FiltersComps/GrillFilters'

class SwitchFilters extends Component{
  constructor(props){
    super(props);
    this.state={
      filterOpen: false
    }
    this.filterToggle = this.filterToggle.bind(this)
    this.isFilterOpen = this.isFilterOpen.bind(this)
  }

  isFilterOpen(){
    return this.state.filterOpen ? 'open' : ''
  }

filterToggle(){
    this.setState({
      filterOpen: !this.state.filterOpen
    })
  }


  renderFilters(param){
    switch(param){
      case 'fireplace':
      return <FireplaceFilters filterToggle={this.filterToggle} className={this.isFilterOpen()} {...this.props}/>
      case 'grill':
      return <GrillFilters filterToggle={this.filterToggle} className={this.isFilterOpen()}{...this.props}/>
      default:
      return <></>
    }
  }



  render(){
    return (
      <div>
        <div className="filter-btn" onClick={this.filterToggle}>Search</div>
        {this.renderFilters(this.props.match.params.category)}
      </div>
    )}
}

export default SwitchFilters;