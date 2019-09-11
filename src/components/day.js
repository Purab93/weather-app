import React from 'react';

export default class App extends React.Component{
  conKlvnToCels(value){
    return (Number(value) - 273.15).toFixed(1);
  }

  render(){
    let tempData = this.props && this.props.main ? this.props.main : {},
        wthrIconUrl = this.props && this.props.weather? 'http://openweathermap.org/img/wn/' + this.props.weather[0].icon + '@2x.png' : '';
    return (
      <div className="day-holder">
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
