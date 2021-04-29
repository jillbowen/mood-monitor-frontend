import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchDays} from '../actions/days';
import Days from '../components/Days';
import Day from '../components/Day';
import DayInput from '../components/DayInput';

class DaysContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchDays()
    }
    
    render() {
        return(
            <div>
                <Route path='/days/new' component={DayInput}/>
                <Route exact path='/days' render={() => <Days days={this.props.days} />} />
                <Route path='/days/:id' render={(routerProps) => <Day {...routerProps} days={this.props.days} />} />
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