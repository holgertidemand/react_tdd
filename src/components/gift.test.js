import React from 'react';
import { shallow } from 'enzyme';
import Gift from './gift';

describe('Gift', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove }
  const gift = shallow(<Gift { ...props } />);

  it('should render properly', () => {
    expect(gift).toMatchSnapshot(); 
  }); 

  it('initial state should have a person and a gift', () => {
    expect(gift.state()).toEqual({ person: '', present: ''});
  });

  describe('updates `state` when user submit the form', () => {
    const person = 'Holger';
    const present = 'PS4'; 

    beforeEach(() => {
      gift.find('.input-person').simulate('change', { target: { value: person } });
      gift.find('.input-present').simulate('change', { target: { value: present } });
    });

    it('should update person in `state`', () => {
      expect(gift.state().person).toEqual(person);
    });

    it('should update present in `state`', () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe('when user clicks `remove gift` button', () =>{

    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    it('calls the removeGift callback', () => {
      expect(mockRemove).toBeCalledWith(id);
    });
  });
  
});