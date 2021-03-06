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
    this.getPictureData();
  }

  getPictureData(date = undefined) {
    const url = date ? this.requestUrlWithDate(date) : this.state.defaultUrl
    rest(url).then((response) => {
      const pictureData= JSON.parse(response.entity);
      this.setState({
        pictureData
      })
    })
  }

  requestUrlWithDate(date) {
    return `${this.state.defaultUrl}&date=${date}`
  }

  render() {
    const {date, explanation, title, url} = this.state.pictureData
    return (
      <div>
        <h1>{title}</h1>
        <div>{explanation}</div>
        <Picture imageSrc={url} title={title} />
        <div>{date}</div>
      </div>
    );
  }
}

export default Viewer;
