import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  });

  it('initial `state` should be eq to []', () =>{
    expect(app.state().gifts).toEqual([]);
  });

  describe('user click add gift button', () => {

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() =>{
      app.setState({ gifts: [] });
    });

    it('adds gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    it('adds new gift to list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });
  });
});