import React from "react";
import Viewer from "./Viewer";
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Viewer', () => {
  test('Has default state', async () => {
    const viewer = await mount(<Viewer />)
    expect(viewer.state().defaultUrl).toEqual(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
    expect(viewer.state().pictureData).toEqual({});
  });

  test('Retrieves picture from date', async () => {
    const viewer = await mount(<Viewer />)
  });
});
