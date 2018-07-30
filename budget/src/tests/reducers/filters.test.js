import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test(`should setup default filter values`, () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

test(`should set sortBy to amount`, () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test(`should set sortBy to date`, () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test(`should set text filter to given value`, () => {
    const text = 'This is my filter';
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text,
    });
    expect(state.text).toBe(text);
});

test(`should set start date filter to given value`, () => {
    const val = moment(0);
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        val,
    });
    expect(state.startDate).toBe(val);
});

test(`should set end date filter to given value`, () => {
    const val = moment(0);
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        val,
    });
    expect(state.endDate).toBe(val);
});