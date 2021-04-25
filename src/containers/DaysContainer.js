import React from 'react';
import {connect} from 'react-redux';
import {fetchDays} from '../actions/fetchDays';
import Days from '../components/Days';
import DayInput from '../components/DayInput';

class DaysContainer extends React.Component {
    
    componentDidMount() {
        fetchDays()
    }
    
    render() {
        return(
            <div>
                <Days />
                <DayInput />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        days: state.accounts
    }
}

export default connect()(DaysContainer);