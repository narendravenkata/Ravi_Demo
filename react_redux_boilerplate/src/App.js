import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';



class App extends Component {
  render() {
    return (

      <div className="container">
        <h2>Welcome</h2>
        <Home />
      </div>

    );
  }
}

export default App;
