import React from "react";
import Viewer from "./Viewer";
import "jest-dom/extend-expect";
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Viewer', () => {
  test('Has default state', () => {
    const viewer = shallow(<Viewer />)

    expect(viewer.state().defaultUrl).toEqual('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    expect(viewer.state().pictureData).toEqual({});
  });

});
