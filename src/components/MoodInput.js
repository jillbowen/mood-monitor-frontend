import React from 'react';
import {connect} from 'react-redux';
import { addMood } from '../actions/moods';
import '../App.css'

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
        this.props.addMood(this.state, this.props.day.id)
        this.setState({
            awake_rating: '',
            calm_rating: '',
            confidence_rating: '',
            happy_rating: '',
            relaxed_rating: '',
            journal_entry: ''
        })
    }
    
    render() {
        return(
            <div className="mood-input-div">
                <h2 className="mood-input-header">How's Your Mood Today?</h2>
                <h3 className="mood-input-header">Rate Each Mood on a Scale of 1-10</h3>
                <h3 className="mood-input-header">1=low, 10=high</h3> 
                    <form onSubmit={this.handleSubmit}>
                        <label>Rate Your Awakeness:</label>
                        <input type="number" min="1" max="10" value={this.state.awake_rating} name="awake_rating" onChange={this.handleChange}/><br/><br/>

                        <label>Rate How Calm You Are:</label>
                        <input type="number" min="1" max="10" value={this.state.calm_rating} name="calm_rating" onChange={this.handleChange}/><br/><br/>
                        
                        <label>Rate Your Confidence:</label>
                        <input type="number" min="1" max="10" value={this.state.confidence_rating} name="confidence_rating" onChange={this.handleChange}/><br/><br/>
                        
                        <label>Rate Your Happiness:</label>
                        <input type="number" min="1" max="10" value={this.state.happy_rating} name="happy_rating" onChange={this.handleChange}/><br/><br/>
                        
                        <label>Rate How Relaxed You Are:</label>
                        <input type="number" min="1" max="10" value={this.state.relaxed_rating} name="relaxed_rating" onChange={this.handleChange}/><br/><br/>
                        
                        <p>Quick Journal (optional):</p>
                        <textarea name="journal_entry" value={this.state.journal_entry} onChange={this.handleChange}></textarea><br/><br/>

                        <input type="submit"/>
                    </form>
            </div>
        )
    }
}

export default connect(null, {addMood})(MoodInput);