import React, { Component } from 'react';

// css
import './Weather.css';

import axios from 'axios';
// import { Link } from 'react-router-dom';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecasts: []
    };
    console.log('url prop received - ' + this.props.url);
  }

  // get data from api url
  componentDidUpdate(prevProps) {
    let apiURL = this.props.url;

    console.log(apiURL);
    console.log(prevProps.apiURL);

    axios
      .get(apiURL)
      .then(res => {
        console.log(apiURL);
        const forecastsArr = res.data.list;
        console.log(res.data);
        if (this.props.url !== prevProps.url) {
          this.setState({
            // set new state

            forecasts: forecastsArr // grab 10 records from the data object in the response
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const renderImage = forecast => {
      let image;
      switch (forecast) {
        case '01d':
          image = 'http://openweathermap.org/img/wn/01d@2x.png';
          break;
        case '01n':
          image = 'http://openweathermap.org/img/wn/01n@2x.png';
          break;
        case '02d':
          image = 'http://openweathermap.org/img/wn/02d@2x.png';
          break;
        case '02n':
          image = 'http://openweathermap.org/img/wn/02n@2x.png';
          break;
        case '03d':
          image = 'http://openweathermap.org/img/wn/03d@2x.png';
          break;
        case '03n':
          image = 'http://openweathermap.org/img/wn/03n@2x.png';
          break;
        case '04d':
          image = 'http://openweathermap.org/img/wn/04d@2x.png';
          break;
        case '04n':
          image = 'http://openweathermap.org/img/wn/04n@2x.png';
          break;
        case '9d':
          image = 'http://openweathermap.org/img/wn/9d@2x.png';
          break;
        case '9n':
          image = 'http://openweathermap.org/img/wn/9n@2x.png';
          break;
        case '10d':
          image = 'http://openweathermap.org/img/wn/10d@2x.png';
          break;
        case '10n':
          image = 'http://openweathermap.org/img/wn/10n@2x.png';
          break;
        case '11d':
          image = 'http://openweathermap.org/img/wn/11d@2x.png';
          break;
        case '11n':
          image = 'http://openweathermap.org/img/wn/11n@2x.png';
          break;
        case '13d':
          image = 'http://openweathermap.org/img/wn/13d@2x.png';
          break;
        case '13n':
          image = 'http://openweathermap.org/img/wn/13n@2x.png';
          break;
        case '50d':
          image = 'http://openweathermap.org/img/wn/50d@2x.png';
          break;
        case '50n':
          image = 'http://openweathermap.org/img/wn/50n@2x.png';
          break;

        default:
          image = 'no image';
          break;
      }
      return image;
    };
    console.log(this.image);
    console.log(this.props.url);
    return (
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th>date/time</th>
              <th>forecast</th>
              <th>temp</th>
              <th>humidity</th>
              <th>icon num</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {this.state.forecasts.map(forecast => (
              <tr key={forecast.dt}>
                <td>{forecast.dt_txt}</td>
                <td>{forecast.weather[0].description}</td>
                <td>{Math.floor(forecast.main.temp - 273.15)}</td>
                <td>{forecast.main.humidity}</td>
                <td>{forecast.weather[0].icon}</td>
                <td>
                  {forecast.weather[0].description ? (
                    <img src={renderImage(forecast.weather[0].icon)} />
                  ) : (
                    ''
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Weather;
