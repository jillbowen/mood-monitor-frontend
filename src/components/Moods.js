import React from 'react';

const handleDelete = () => {
    
}

const Moods = (props) => {
    return (
        <div>
            {props.moods && props.moods.map(mood => 
                <ul key={mood.id}> 
                    <li>Awake Rating: {mood.awake_rating}</li>
                    <li>Calm Rating: {mood.calm_rating}</li>
                    <li>Confidence Rating: {mood.confidence_rating}</li>
                    <li>Happy Rating: {mood.happy_rating}</li>
                    <li>Relaxed Rating: {mood.relaxed_rating}</li>
                    <h3>Journal Entry:</h3>
                    <p>{mood.journal_entry}</p>
                    <button onClick={handleDelete}>Delete Check-In</button><br/><br/><br/>
                </ul>
            )}
        </div>
    )
}

export default Moods;