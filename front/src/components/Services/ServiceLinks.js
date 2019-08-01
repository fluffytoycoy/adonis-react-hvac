import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Services extends Component{
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

    render(){
      return (
          <div className="service-links card">
            <h3 className={this.isFilterOpen()} onClick={this.filterToggle}>
              <i className="fas fa-sort-down"></i>
                Services
              <i className="fas fa-sort-down right"></i>
            </h3>
            <ul className={this.isFilterOpen()}>
              <li><Link to="/Services/Air-Conditioning-Duct-Repair" onClick={this.filterToggle}>Air Conditioning Duct Repair</Link></li>
              <li><Link to="/Services/Air-Conditioning-Installation" onClick={this.filterToggle}>Air Conditioning Installation</Link></li>
              <li><Link to="/Services/Air-Conditioning-Repair" onClick={this.filterToggle}>Air Conditioning Repair</Link></li>
              <li><Link to="/Services/Air-Duct-Installation" onClick={this.filterToggle}>Air Duct Installation</Link></li>
              <li><Link to="/Services/Commercial-Heating-System-Repair" onClick={this.filterToggle}>Commercial Heating System Repair</Link></li>
              <li><Link to="/Services/Furnace-Repair" onClick={this.filterToggle}>Furnace Repair</Link></li>
              <li><Link to="/Services/Furnace-Service" onClick={this.filterToggle}>Furnace Service</Link></li>
              <li><Link to="/Services/HVAC-Service" onClick={this.filterToggle}>HVAC Service</Link></li>
              <li><Link to="/Services/Geothermal-Air-Conditioning-Installation" onClick={this.filterToggle}>Geothermal Air Conditioning Installation</Link></li>
              <li><Link to="/Services/Heating-System-Installation" onClick={this.filterToggle}>Heating System Installation</Link></li>
              <li><Link to="/Services/Heating-System-Repair" onClick={this.filterToggle}>Heating System Repair</Link></li>
              <li><Link to="/Services/Sheet-Metal-Fabrication" onClick={this.filterToggle}>Sheet Metal Fabrication</Link></li>
            </ul>
          </div>
      );
    }

}

export default Services;
