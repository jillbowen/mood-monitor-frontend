import React from 'react';

class DayInput extends React.Component {
    
    state = {
        date: ''
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.date]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Date: </label>
                    <input type="date" placeholder="Date of Mood Check-In" value={this.state.date} name="date" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default DayInput;