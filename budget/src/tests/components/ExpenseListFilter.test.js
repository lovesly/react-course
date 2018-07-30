import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
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

test(`should handle text change`, () => {
    const value = 'this is my filter';
    // wrapper.find('input').prop('onChange')({ target: { value: text } });
    wrapper.find('input').simulate('change', {
        target: {
            value,
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test(`should sort by date`, () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: {
            value,
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test(`should sort by amount`, () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {
            value,
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test(`should handle date changes`, () => {
    const start = moment(1000);
    const end = moment(1000).add(3, 'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate: start, endDate: end });
    expect(setStart).toHaveBeenLastCalledWith(start);
    expect(setEnd).toHaveBeenLastCalledWith(end);
});
 
test(`should handle date focus chagnes`, () => {
    // 原来 focused 的值是 null, startDate, endDate....
    const focused = 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused);
    expect(wrapper.state('calenderFocused')).toBe(focused);
});