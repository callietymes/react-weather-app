import React, {Component} from 'react';
import api from '../config/api';

class Zipcode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityState: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        api.getTodaysWeather(this.state.cityState);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState(() => {
            return {
                cityState: value
            }
        })
    }

    render () {
        return (
            <div className="zipcode-container">
                <input
                    id="cityState"
                    placeholder="St. George Utah"
                    type="text"
                    autoComplete="off"
                    className="city-state-input"
                    value={this.state.cityState}
                    onChange={this.handleChange}
                />
                <button
                    className="button"
                    onClick={this.handleSubmit}
                    type="submit">
                    Get Weather
                </button>
            </div>
        )
    }
}

export default Zipcode;
