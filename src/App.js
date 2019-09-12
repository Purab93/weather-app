import React from 'react';
import Select from 'react-select';
import './App.css';

import Day from './components/day';

export default class App extends React.Component{
  getCountryList(){
    return [{
      label:'Mumbai',
      value: 'Mumbai,IN'
    },{
      label:'Amsterdam',
      value: 'Amsterdam,NH'
    }, {
      label: 'London',
      value: 'London,UK'
    }, {
      label: 'Tokyo',
      value: 'Tokyo,JP'
    }];
  }

  cityChangeHandler = (cityData) => {
    this.setState({
      selcity: cityData
    });
    
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Select
              options={this.getCountryList()}
              //value={this.state.value}
              onChange={this.cityChangeHandler}
              className="city-dropdown"
              placeholder="Select City"
          />        
          {this.state ? <Day {...this.state} />:<></>}
        </header>
      </div>
    );
  }
}