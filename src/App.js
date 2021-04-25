import React from 'react';
import {connect} from 'react-redux';
import DaysContainer from './containers/DaysContainer';

class App extends React.Component {
  
  render () {
    return (
      <div className="App">
        <DaysContainer />
      </div>
    )
  }
}

export default App;