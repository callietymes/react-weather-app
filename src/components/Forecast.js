import React, {Component} from 'react';
import api from '../utils/api';
import queryString from 'query-string';
import DayItem from './DayItem';

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            forecast: null,
        };
        this.updateForecast = this.updateForecast.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

    handleClick(city) {
        city.city = this.city;
        this.props.history.push({
            pathname: '/details/' + this.city,
            state: city,
        })
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
                                return <DayItem key={dayData.dt} day={dayData}  onClick={this.handleClick.bind(this, dayData)}/>
                            }, this)}
                        </div>
                    </div>}
            </div>
        )
    }
}

export default Forecast;
