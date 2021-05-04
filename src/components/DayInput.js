import React from 'react';
import {connect} from 'react-redux';
import {addDay} from '../actions/days';
import '../App.css';

class DayInput extends React.Component {
    
    state = {
        date: ''
    }
    
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addDay(this.state)
        this.setState({ date: ''})
        this.props.history.push('/days');
    }

    render() {
        return (
            <div className="new-day-div">
                <form onSubmit={this.handleOnSubmit}>
                    <label className="date-label">Date of Mood Check-In: </label>
                    <input type="text" value={this.state.date} name="date" onChange={this.handleOnChange} /><br/>
                    <input type="submit"/><br/><br/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDay})(DayInput);