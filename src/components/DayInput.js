import React from 'react';
import {connect} from 'react-redux';
import {addDay} from '../actions/days'

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
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Date of Mood Check-In: </label>
                    <input type="text" value={this.state.date} name="date" onChange={this.handleOnChange} /><br/>
                    <input type="submit"/><br/><br/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDay})(DayInput);