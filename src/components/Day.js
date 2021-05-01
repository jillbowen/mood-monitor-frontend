import React from 'react';
import {Redirect} from 'react-router-dom';

const Day = (props) => {
    
    let day = props.days[props.match.params.id - 1]
    
    return (
        <div>
            <h1>
                {day ? day.date : null}
            </h1><br/>
        </div>
    )
}

export default Day;