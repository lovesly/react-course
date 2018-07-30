import moment from 'moment';
import { 
    setStart, 
    setEnd, 
    setTextFilter,
    sortByAmount,
    sortByDate,
} from '../../actions/filters';

test(`should generate set start action object`, () => {
    const action = setStart(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        val: moment(0)
    });
});

test(`should generate set end action object`, () => {
    const action = setEnd(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        val: moment(0)
    });
});

test(`should generate set text filter action object with given value`, () => {
    const text = 'Some text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text,
    });
});

test(`should generate set text filter action object with default value`, () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '',
    });
});

test(`should generate sortByAmount filter action object`, () => {
    const action = sortByAmount();
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test(`should generate sortByDate filter action object`, () => {
    const action = sortByDate();
    expect(action).toEqual({ type: 'SORT_BY_DATE' });
});