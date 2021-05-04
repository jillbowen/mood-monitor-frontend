import React from 'react';
import MoodInput from '../components/MoodInput';
import Moods from '../components/Moods';

class MoodsContainer extends React.Component {

    render() {
        return(
            <div>
                <MoodInput  day={this.props.day}/><br/>
                <h2 className="mood-display">Ratings for today: </h2>
                <Moods moods={this.props.day && this.props.day.moods}/>
            </div>
        )
    }
}

export default MoodsContainer