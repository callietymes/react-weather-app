import React, {Component} from 'react';
const Link = require('react-router-dom').Link;

class Zipcode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityState: ''
        };
        this.handleChange = this.handleChange.bind(this);
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
                <Link
                    className='button'
                    to={{
                        pathname: '/forecast',
                        search: '?city=' + encodeURI(this.state.cityState)
                    }}>
                    Get Weather
                </Link>
            </div>
        )
    }
}

export default Zipcode;
