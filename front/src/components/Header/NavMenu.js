import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavMenu extends Component{
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
      return(
        <>
        <div className={this.isFilterOpen()}  >
          <h3>(565)-555-3432</h3>
          <ul>
            <li><Link onClick={this.filterToggle} aria-label="Go To HomePage" to="/">Home</Link></li>
            <li><Link onClick={this.filterToggle} aria-label="Go To Services Page" to="/services">Services</Link></li>
            <li><Link onClick={this.filterToggle} aria-label="Go To Products Page" to="/products">Products</Link></li>
            <li><Link onClick={this.filterToggle} aria-label="Go To Contact Page" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <i onClick={this.filterToggle} className="fas fa-bars"></i>
        </>
      )
    }
}
export default NavMenu;