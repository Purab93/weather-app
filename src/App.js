import React from 'react';
import Select from 'react-select';
import Axios from 'axios';
import './App.css';

import Day from './components/day';

export default class App extends React.Component{
  getCountryList(){
    return [{
      label:'Mumbai',
      value: 'Mumbai'
    },{
      label:'Delhi',
      value: 'Delhi'
    }];
  }

  cityChangeHandler = (cityData) => {
    Axios.get('https://api.openweathermap.org/data/2.5/weather?q='+cityData.value+'&appid=56565355e87b48d10440f076e9c88be1',{})
      .then((response) => {
          // handle success
          debugger;
          let weatherData = response.data;
          console.log(this.state);
          this.setState({
            wthData:weatherData
          });
          return true;
      }).catch(function (error) {
          // handle error
          console.log(error);
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
          <Day {...this.state?this.state.wthData:{}}/>
        </header>
      </div>
    );
  }
}
