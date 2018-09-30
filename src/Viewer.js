import React, { Component } from 'react';
import Picture from './Picture'
import rest from 'rest';
import './App.css';


class Viewer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultUrl: `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`,
      pictureData: {}
    }
  }

  componentWillMount() {
    rest(this.state.defaultUrl).then((response) => {
      const pictureData= JSON.parse(response.entity);
        this.setState({
          pictureData
        })
      })
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Picture imageSrc={this.state.pictureData.url} title={this.state.pictureData.title} />
      </div>
    );
  }
}

export default Viewer;
