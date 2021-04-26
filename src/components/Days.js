import React from 'react';

const Days = (props) => {
    return (
        <div>
            {props.days.map(day => <li key={day.id}>{day.date}</li>)} 
        </div>
    )
}

export default Days;