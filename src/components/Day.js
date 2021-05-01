import React from 'react';
// import {Redirect} from 'react-router-dom';
import MoodsContainer from '../containers/MoodsContainer';

const Day = (props) => {
    
    let day = props.days.filter(day => day.id == props.match.params.id)[0]
    
    return (
        <div>
            <h1>
                {day ? day.date : null}
            </h1><br/>

            <MoodsContainer day={day}/>
        </div>
    )
}

export default Day;