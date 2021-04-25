import React from 'react';
import {connect} from 'react-redux';
import {fetchDays} from './actions/fetchDays';

class App extends React.Component {
  componentDidMount(){
    this.props.fetchDays({type: 'FETCH_DAYS', payload: {date: '2021-04-24T00:00:00.000Z'}})
  }
  
  render () {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

export default connect(null, {fetchDays})(App);