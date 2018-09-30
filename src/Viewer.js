import React, { Component } from 'react';
import Picture from './Picture'
import './App.css';
import axios from 'axios';


class Viewer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultUrl: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
      pictureData: {}
    }
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Viewer;
