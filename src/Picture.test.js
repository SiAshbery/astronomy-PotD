import React from "react";
import Picture from "./Picture";
import { render } from "react-testing-library";
import { getByAltText } from 'dom-testing-library';
import "jest-dom/extend-expect";

describe('Picture', () => {
  const props = { imageSrc: 'https://apod.nasa.gov/apod/image/1809/E0102NS_HubbleChandra_960.jpg' }

  it('Recieves and renders imageSrc prop', () => {
    const { getByAltText } = render(<Picture {...props} />)
    const imgTag = getByAltText('space')
    expect(imgTag.src).toBe(props.imageSrc)
  });
});
