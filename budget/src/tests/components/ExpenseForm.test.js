import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

// interesting, how does the test know to use the mock functions
test(`should render ExpenseForm correctly`, () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test(`should render ExpenseForm with expense data correctly`, () => {
    const wrapper = shallow(<ExpenseForm expense={ expenses[1] }/>);
    expect(wrapper).toMatchSnapshot();
});

// test user interactions
test(`should render error for invalid form submission`, () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', { 
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test(`should set description on input chagne`, () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test(`should set note on textarea chagne`, () => {
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test(`should set amount on input chagne`, () => {
    const value = '12.11';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test(`should not set amount if input is invalid`, () => {
    const value = '123.223';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe("");
});

// spy function.
test(`should call onSubmit prop for valid form submission`, () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={ expenses[0] } onSubmit={ onSubmitSpy }/>);
    wrapper.find('form').simulate('submit', { 
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    // should have a better way to do this.
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt,
    });
});

// get props
test(`should set new date on date change`, () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test(`should set new calenderFocused value on focus change`, () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused: true });
    expect(wrapper.state('calenderFocused')).toBe(true);
});