import React from 'react';
import {connect} from 'react-redux';
import { addMood } from '../actions/moods';
import MoodSlider from './MoodSlider';

class MoodInput extends React.Component {
    
    state = {
        awake_rating: '',
        calm_rating: '',
        confidence_rating: '',
        happy_rating: '',
        relaxed_rating: '',
        journal_entry: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // addMood(this.state, this.props.id)
    }
    
    render() {
        return(
            <div>
                <h2>How's Your Mood Today?</h2>
                <p>(Scale: 1=low, 10=high)</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>Rate Your Awakeness:</label><br/><br/><br/>
                        <MoodSlider name="awake_rating" value={this.state.awake_rating} onChange={this.handleChange}/><br/>
                        
                        <label>Rate How Clam You Are:</label><br/><br/><br/>
                        <MoodSlider name="calm_rating" value={this.state.calm_rating} onChange={this.handleChange}/><br/>
                        
                        <label>Rate Your Confidence:</label><br/><br/><br/>
                        <MoodSlider name="confidence_rating" value={this.state.confidence_rating} onChange={this.handleChange}/><br/>
                        
                        <label>Rate Your Happiness:</label><br/><br/><br/>
                        <MoodSlider name="happy_rating" value={this.state.happy_rating} onChange={this.handleChange}/><br/>
                        
                        <label>Rate How Relaxed You Are:</label><br/><br/><br/>
                        <MoodSlider name="relaxed_rating" value={this.state.relaxed_rating} onChange={this.handleChange}/><br/>
                        
                        <p>Quick Journal (optional):</p>
                        <textarea name="journal_entry" value={this.state.journal_entry} onChange={this.handleChange}></textarea><br/><br/>

                        <input type="submit"/>
                    </form>
            </div>
        )
    }
}

export default connect(null)(MoodInput);