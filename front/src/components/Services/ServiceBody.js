import React, {Component} from 'react';
import ComRes from './Service/ComRes'
import AirConditioningDuctRepair from './Service/AirConditioningDuctRepair'
import AirConditioningInstallation from './Service/AirConditioningInstallation'
import AirConditioningRepair from './Service/AirConditioningRepair'
import AirDuctInstallation  from './Service/AirDuctInstallation'
import CommercialHeatingSystemRepair from './Service/CommercialHeatingSystemRepair'
import FurnaceRepair from './Service/FurnaceRepair'
import FurnaceService from './Service/FurnaceService'
import HVACService from './Service/HVACService'
import GeothermalAirConditioningInstallation from './Service/GeothermalAirConditioningInstallation'
import HeatingSystemInstallation from './Service/HeatingSystemInstallation'
import HeatingSystemRepair from './Service/HeatingSystemRepair'
import SheetMetalFabrication from './Service/SheetMetalFabrication'





class ServiceBody extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }


  renderFilters(param){
    switch(param){
      case undefined:
      return <ComRes {...this.props}/>

      case 'Air-Conditioning-Duct-Repair':
      return <AirConditioningDuctRepair  {...this.props}/>

      case 'Air-Conditioning-Installation':
      return <AirConditioningInstallation {...this.props}/>

      case 'Air-Conditioning-Repair':
      return <AirConditioningRepair />

      case 'Air-Duct-Installation':
      return <AirDuctInstallation />

      case 'Commercial-Heating-System-Repair':
      return <CommercialHeatingSystemRepair />

      case 'Furnace-Repair':
      return <FurnaceRepair />

      case 'Furnace-Service':
      return <FurnaceService/>

      case 'HVAC-Service':
      return <HVACService />

      case 'Geothermal-Air-Conditioning-Installation':
      return <GeothermalAirConditioningInstallation />

      case 'Heating-System-Installation':
      return <HeatingSystemInstallation />

      case 'Heating-System-Repair':
      return <HeatingSystemRepair />

      case 'Sheet-Metal-Fabrication':
      return <SheetMetalFabrication />

      default:
      return <></>
    }
  }

  render(){
    const service = this.props.match.params.service;
    return (
      <div className="service-info card">
        {this.renderFilters(service)}
        <h3>WHY CHOOSE US?</h3>
        <ul>
          <li>Locally Owned & Operated </li>
          <li>High Quality Work </li>
          <li>Prompt Project Completion</li>
        </ul>
      </div>
    )}
}

export default ServiceBody;