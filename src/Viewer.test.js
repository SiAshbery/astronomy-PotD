import React from "react";
import Viewer from "./Viewer";
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Viewer', () => {
  test('Has default state', async () => {
    const viewer = await mount(<Viewer />)
    // await viewer.instance().componentWillMount();
    expect(viewer.state().defaultUrl).toEqual(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
    expect(viewer.state().pictureData).toEqual({});
  });

  test('Retrieves picture from date', () => {
    const viewer = mount(<Viewer />)
    viewer.instance().getPictureData('2018-01-01');
    const pictureData = viewer.state().pictureData
    expect(pictureData.date).toEqual('2018-01-01');
    expect(pictureDate.explanation).toEqual('2018-01-01');
    expect(pictureData.title).toEqual('2018-01-01');
    expect(pictureData.url).toEqual('2018-01-01');
  });
});
