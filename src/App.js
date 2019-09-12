import React from 'react';
import './App.css';
import Router from './Config/Router/Router'
class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        
        <Router /> 
      </div>
    )
  }
}


export default App;
