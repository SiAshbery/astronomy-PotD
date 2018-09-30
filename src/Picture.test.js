import React from "react";
import Picture from "./Picture";
import "jest-dom/extend-expect";
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Picture', () => {
  const props = { imageSrc: 'https://apod.nasa.gov/apod/image/1809/E0102NS_HubbleChandra_960.jpg' }

  it('Recieves and renders imageSrc prop', () => {
    const picture = mount(<Picture {...props} />)
    expect(picture.props().imageSrc).toEqual(props.imageSrc)
  });
});
