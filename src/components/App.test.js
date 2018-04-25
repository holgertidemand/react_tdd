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
    const id = 1;

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() =>{
      app.setState({ gifts: [] });
    });

    it('adds gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('adds new gift to list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('should render a gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('user should be able to remove gifts from list', () =>{
      beforeEach(() => {
        app.instance().removeGift(id);
      });

    it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });

    
  });
});