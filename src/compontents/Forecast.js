import React, {Component} from 'react';
import api from '../utils/api';
import PropTypes from 'prop-types';
import queryString from 'query-string';
const getDate = require('../utils/dateHelper').getDate;

function DayItem(props) {
    const date = getDate(props.day.dt);
    const icon = props.day.weather[0].icon;

    return (
        <div className="dayContainer">
            <img className='weather' src={process.env.PUBLIC_URL + '/images/weather-icons/' + icon + '.svg'}
                 alt='Weather'/>
            <div className="date">{date}</div>
        </div>
    )
}

DayItem.propTypes = {
    day: PropTypes.object.isRequired
};

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            forecast: null,
        };
        this.updateForecast = this.updateForecast.bind(this);
    }

    componentDidMount() {
        this.city = queryString.parse(this.props.location.search).city;
        this.updateForecast(this.city);
    }

    updateForecast(cityState) {
        this.setState(() => {
            return {
                forecast: null,
            }
        });

        api.getFiveDayForecast(cityState)
            .then(forecast => {
                this.setState(() => {
                    return {
                        loading: false,
                        forecast: forecast
                    }
                })
            });
    }

    render() {
        return (
            <div>
                {this.state.loading
                    ? <h1 className='forecast-header'>Loading</h1>
                    : <div>
                        <h1 className='forecast-header'>{this.city}</h1>
                        <div className='forecast-container'>
                            {this.state.forecast.map(function (dayData) {
                                return <DayItem key={dayData.dt} day={dayData}/>
                            }, this)}
                        </div>
                    </div>}
            </div>
        )
    }
}

export default Forecast;
