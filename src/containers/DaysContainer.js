import React from 'react';
import {connect} from 'react-redux';
import {fetchDays} from '../actions/fetchDays';
import Days from '../components/Days';
import DayInput from '../components/DayInput';

class DaysContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchDays()
    }
    
    render() {
        return(
            <div>
                <DayInput />
                <Days days={this.props.days}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        days: state.days
    }
}

export default connect(mapStateToProps, {fetchDays})(DaysContainer);