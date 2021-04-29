import React from 'react';
import Day from './Day';

const Days = (props) => {
    return (
        <div>
            {props.days.map(day => <div key={day.id}><Day day={day} /></div>)} 
        </div>
    )
}

export default Days;