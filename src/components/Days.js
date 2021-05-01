import React from 'react';
import {Route, Link} from 'react-router-dom';
import Day from './Day';

const Days = (props) => {
    return (
        <div>
            {props.days.map(day => <li key={day.id}><Link to={`/days/${day.id}`}>{day.date}</Link></li>)} 
        </div>
    )
}

export default Days;