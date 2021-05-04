import React from 'react';
import {connect} from 'react-redux';
import {deleteMood} from '../actions/moods'

const Moods = (props) => {
    
    const handleDelete = (mood) => {
        props.deleteMood(mood.id, mood.day_id)
    }
    
    return (
        <div>
            {props.moods && props.moods.map(mood => 
                <ul key={mood.id}> 
                    <h4>Time of Check-In: {mood.created_at}</h4>
                    <li>Awake Rating: {mood.awake_rating}</li>
                    <li>Calm Rating: {mood.calm_rating}</li>
                    <li>Confidence Rating: {mood.confidence_rating}</li>
                    <li>Happy Rating: {mood.happy_rating}</li>
                    <li>Relaxed Rating: {mood.relaxed_rating}</li>
                    <h4>Journal Entry:</h4>
                    <p>{mood.journal_entry}</p>
                    <button onClick={() => handleDelete(mood)}>Delete Check-In</button><br/><br/><br/>
                </ul>
            )}
        </div>
    )
}

export default connect(null, {deleteMood})(Moods);