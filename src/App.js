import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Viewer from './Viewer'

class App extends Component {
  render() {
    return (
      <Viewer title='Hello, Space!' />
    );
  }
}

export default App;
