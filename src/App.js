import React from 'react';
import DaysContainer from './containers/DaysContainer';
import AppNavbar from './components/AppNavbar';

class App extends React.Component {
  
  render () {
    return (
      <div className="App">
        <AppNavbar />
        <DaysContainer />
      </div>
    )
  }
}

export default App;