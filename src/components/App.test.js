import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot()
});

it('initial `state` should be eq to []', () =>{
  expect(app.state().gifts).toEqual([]);
});

it('adds gift to `state` when add btn is click', () => {
  app.find('.btn-add').simulate('click');

  expect(app.state().gifts).toEqual([{ id: 1 }]);
});

it('adds new gift to list on click', () => {
  app.find('.btn-add').simulate('click');

  expect(app.find('.gift-list').children().length).toEqual(1);
})