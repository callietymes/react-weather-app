import React, {Component} from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityState: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        console.log('Handle Submit');
    }

    handleChange() {
        console.log('Handle change');
    }


    render() {
        return (
            <form className="home-container" onSubmit={this.handleSubmit}>
                <label className="header" htmlFor="cityState">
                    Enter a City and State
                </label>
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
                        type="submit">
                        Get Weather
                    </button>
                </div>
            </form>
        );
    }
}

export default Main;
