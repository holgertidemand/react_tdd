import React from 'react';
import { shallow } from 'enzyme';
import Gift from './gift';

describe('Gift', () => {
  const gift = shallow(<Gift />);

  it('should render properly', () => {
    expect(gift).toMatchSnapshot(); 
  }); 
});