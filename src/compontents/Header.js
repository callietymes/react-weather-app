import React, {Component} from 'react';
import Zipcode from './Zipcode';

class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <h1>Clever Title</h1>
                <Zipcode/>
            </div>
        )
    }
}

export default Header;


