import React from 'react';
import Picture from './Picture'
import './App.css';

export default ({ title }) => (
  <div>
    <div data-testid="viewer-title">{title}</div>
    <Picture imageSrc="https://apod.nasa.gov/apod/image/1809/E0102NS_HubbleChandra_960.jpg" />
  </div>
);
