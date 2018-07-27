
// TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
}); 

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE
const setStart = (val) => ({
    type: 'SET_START_DATE',
    val,
});
// SET_END_DATE
const setEnd = (val) => ({
    type: 'SET_END_DATE',
    val
});

export { setTextFilter, sortByDate, sortByAmount, setStart, setEnd }