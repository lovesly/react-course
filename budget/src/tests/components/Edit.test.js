import React from 'react';
import { shallow } from 'enzyme';
import { EditPage } from '../../components/Edit';
import expenses from '../fixtures/expenses';


let startEditExpense, startRemoveExpense, history, wrapper;
// why do we need to pass editExpense and removeExpense as props??
beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditPage expense={ expenses[0] } 
                                startEditExpense={ startEditExpense }
                                startRemoveExpense={ startRemoveExpense }
                                history={ history }/>);
});

test(`should render editPage correctly`, () => {
    expect(wrapper).toMatchSnapshot();
});

test(`should handle onSubmit correctly`, () => {
    // no id.
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[1]);
});

test(`should handle onClick corretly`, () => {
    // wrapper.find('button').prop('onClick')();
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);         
});