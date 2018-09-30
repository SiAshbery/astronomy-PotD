import React from "react";
import Viewer from "./Viewer";
import "jest-dom/extend-expect";
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Viewer', () => {
  test('Has default state', async () => {
    const viewer = await mount(<Viewer />)
    await viewer.instance().componentWillMount();
    expect(viewer.state().defaultUrl).toEqual(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
    expect(viewer.state().pictureData).toEqual({});
  });
});
