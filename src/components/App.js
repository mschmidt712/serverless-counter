import React, { Component } from 'react';
import CounterComponent from './Counter';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Our Serverless Counter</h2>
        </div>
        <CounterComponent />
      </div>
    );
  }
}

export default App;
