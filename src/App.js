import React from 'react';
import {connect} from 'react-redux';
import {fetchDays} from './actions/fetchDays';

class App extends React.Component {
  
  render () {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

export default connect()(App);