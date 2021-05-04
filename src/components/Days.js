import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Days = (props) => {
    
    return (
        <div className="days-div">
            {props.days.map(day => <li key={day.id}><Link to={`/days/${day.id}`}>{day.date}</Link></li>)} 
        </div>
    )
}

export default Days;