import React, {Component} from 'react';
import Zipcode from './Zipcode'

class Main extends Component {

    render() {
        return (
            <div className="home-container">
                <label className="header">
                    Enter a City and State
                </label>
                <Zipcode />
            </div>
        );
    }
}

export default Main;
