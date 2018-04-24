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

