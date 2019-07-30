import React, {Component} from 'react';
import FireplaceFilters from './FiltersComps/FireplaceFilters'
import GrillFilters from './FiltersComps/GrillFilters'

class SwitchFilters extends Component{
  constructor(props){
    super(props);
  }

  renderFilters(param){
    switch(param){
      case 'fireplace':
      return <FireplaceFilters {...this.props}/>
      case 'grill':
      return <GrillFilters {...this.props}/>
      default:
      return <></>
    }
  }
  render(){
    console.log(this.props)
    return (
      <>{this.renderFilters(this.props.match.params.category)}</>
    )}
}

export default SwitchFilters;