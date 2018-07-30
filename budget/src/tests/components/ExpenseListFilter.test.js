import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStart, setEnd, wrapper;
// why do we need to pass editExpense and removeExpense as props??
beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStart = jest.fn();
    setEnd = jest.fn();
    wrapper = shallow(<ExpenseListFilter setTextFilter={ setTextFilter }
                                         sortByDate={ sortByDate }
                                         sortByAmount={ sortByAmount }
                                         setStart={ setStart }
                                         setEnd={ setEnd }
                                         filters={ filters }
                                         />);
});

test(`should render ExpenseListFilter correctly`, () => {
    expect(wrapper).toMatchSnapshot();
});

test(`should render ExpenseListFilter with alt filters correctly`, () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});