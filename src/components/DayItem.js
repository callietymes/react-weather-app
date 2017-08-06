import React from 'react';
import PropTypes from 'prop-types';
const getDate = require('../utils/dateHelper').getDate;

function DayItem(props) {
    const date = getDate(props.day.dt);
    const icon = props.day.weather[0].icon;

    return (
        <div className="dayContainer" onClick={props.onClick}>
            <img className='weather' src={process.env.PUBLIC_URL + '/images/weather-icons/' + icon + '.svg'}
                 alt='Weather'/>
            <div className="date">{date}</div>
        </div>
    )
}

DayItem.propTypes = {
    day: PropTypes.object.isRequired,
    onClick: PropTypes.func
};


export default DayItem;