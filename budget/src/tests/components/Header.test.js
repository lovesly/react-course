import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';

let startLogout, wrapper;
beforeEach(() => {
    startLogout = jest.fn();
    // history = { push: jest.fn() };
    wrapper = shallow(<Header startLogout={ startLogout } />);
});

test(`should render Header correctly`, () => {
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe("Budget app");
    expect(wrapper).toMatchSnapshot();
});

test(`should call startLogout on button click`, () => {
    wrapper.find('button').simulate('click');
    // expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startLogout).toHaveBeenCalled();      
});