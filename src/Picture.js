import React from 'react';
import './App.css';

export default ({ imageSrc }) => (
  <img data-testid="picture-imageSrc" src={imageSrc} alt="space" />
);
