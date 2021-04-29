import React from 'react';

const Day = (props) => {
    
    let day = props.days[props.match.params.id - 1]
    
    return (
        <div>
            <li>{day ? day.date : null}</li><br/>
        </div>
    )
}

export default Day;