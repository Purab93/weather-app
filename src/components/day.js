import React from 'react';
import Axios from 'axios';

export default class App extends React.Component{
  conKlvnToCels(value){
    return (Number(value) - 273.15).toFixed(1);
  }

  componentWillMount(){
      this.getWthData();
      this.getWthHrData();
  }

  componentWillReceiveProps(){
   this.getWthData();
   this.getWthHrData();
  }

  getWthData(){
    Axios.get('https://api.openweathermap.org/data/2.5/weather?q='+this.props.selcity.value+'&appid=56565355e87b48d10440f076e9c88be1',{})
    .then((response) => {
        // handle success
        this.setState({
          wthData:response.data
        });
        return true;
    }).catch(function (error) {
        // handle error
        console.log(error);
    });
  }

  getWthHrData(){
    Axios.get('https://api.openweathermap.org/data/2.5/forecast/hourly?q='+this.props.selcity.value+'&appid=56565355e87b48d10440f076e9c88be1',{})
    .then((response) => {
        // handle success
        debugger
        // this.setState({
        //   wthData:weatherData
        // });
        return true;
    }).catch(function (error) {
        // handle error
        console.log(error);
    });
  }

  render(){
    let tempData = this.state && this.state.wthData ? this.state.wthData.main : {},
        wthrIconUrl = this.state && this.state.wthData? 'http://openweathermap.org/img/wn/' + this.state.wthData.weather[0].icon + '@2x.png' : '';
    return (
      <div className="day-holder">
          <h3>{this.props.selcity.value + " Today's Weather Report"}</h3>
          <div>
              <img src={wthrIconUrl} alt="weather report"/>
          </div>
          <div>Max: {this.conKlvnToCels(tempData.temp_max)}</div>
          <div>Temp: {this.conKlvnToCels(tempData.temp)}</div>
          <div>Min: {this.conKlvnToCels(tempData.temp_min)}</div>
      </div>
    );
  }
}
