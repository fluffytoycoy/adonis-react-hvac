import React, {Component} from 'react';
import Select from 'react-select';
import './Filters.scss';

class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerOptions: [
        {label: "Low", value: 1},
        {label: "High", value: 2}
      ],
      sideOptions: [
        {label: 'Front Facing', value: 1},
        {label: 'Double Sided', value: 2}
      ],
      visable: []
    };
  };

  componentWillReceiveProps(newprops){
    //everytime new selection is made load new products and set visablity to none
    //then add visablity

  }

  componentWillUnmount(){
    console.log('test')
  }


  addAnimationToGridItems(items) {

  }

  linkToProduct(e){
    //push history the selected product page
  }

  render(){
    console.log(this.props.currentSelection)
      return (
        <div>
            <form className="filters">
              <div>
                <label>Power Options</label>
                <Select options={this.state.powerOptions} className='select'/>
              </div>
              <div>
                <label>Side Options</label>
                <Select options={this.state.sideOptions} className='select'/>
              </div>
          </form>
        </div>
      )

  }
}

export default GridItem
