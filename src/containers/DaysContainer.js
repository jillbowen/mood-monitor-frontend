import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchDays} from '../actions/days';
import Days from '../components/Days';
import Day from '../components/Day';
import DayInput from '../components/DayInput';
import HomeContainer from '../components/Home';

class DaysContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchDays()
    }
    
    render() {
        return(
            <div>
                <Switch>
                    <Route path='/days/new' component={DayInput}/>
                    <Route exact path='/days' render={() => <Days days={this.props.days} />} />
                    <Route path='/days/:id' render={(routerProps) => <Day {...routerProps} days={this.props.days} />} />
                    <Route path='/' component={HomeContainer}/>
                </Switch>
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