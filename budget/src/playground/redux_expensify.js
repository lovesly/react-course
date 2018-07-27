import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({ 
    description = '',
    note = '',
    amount = 0, 
    createdAt = 0
 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id,
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
});

// -------------------------------------------------------------- //
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

// -------------------------------------------------------------- //
// expenses Reducer
const defaultExpenseState = [];
const expensesReducer = (state = defaultExpenseState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // why can't we just modify the state?
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id != action.id);
        case 'EDIT_EXPENSE':
            // here you modify the state object right?
            // if not using the spread on object
            // you need to loop through the action.updates.
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates,
                    };
                } else {
                    return expense;
                }
            });
        default: 
            return state;
    }
};
const defaultFilterState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};
const filterReducer = (state = defaultFilterState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text,
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date',
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount',
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.val,
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.val,
            };
        default: 
            return state;
    }
};

// -------------------------------------------------------------- //
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((el) => {
        let startMatch = typeof startDate === 'number' ? el.createdAt >= startDate : true;
        let endMatch = typeof endDate !== 'number' || el.createdAt <= endDate;
        // tricky, multiple text filters?
        // includes function, allows parcial search
        let textMatch = el.description.toLowerCase().includes(text.toLowerCase());
        return startMatch && endMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            // consider undefined?
            return a.createdAt - b.createdAt;
        } else if (sortBy === 'amount') {
            return a.amount - b.amount;
        }
    });
};

// -------------------------------------------------------------- //
// store
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// -------------------------------------------------------------- //
// add expense
const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 100,
    createdAt: 1000,
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 300,
    createdAt: 1500,
}));

const expenseThree = store.dispatch(addExpense({
    description: 'Condom',
    amount: 500,
    createdAt: 750,
}));

// store.dispatch(removeExpense({
//     id: expenseOne.expense.id,
// }));

// store.dispatch(editExpense(expenseTwo.expense.id, {
//     amount: 500,
// }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('dom'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate()); // default

// store.dispatch(setStart(1230));
// store.dispatch(setStart());
// store.dispatch(setEnd(456));
// store.dispatch(setEnd());




// data example
// const demoState = {
//     expenses: [{
//         id: 'aseth',
//         description: 'January Rent',
//         note: 'This was the final payment for that address',
//         amount: 54500,
//         createdAt: 0,
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', // date or ammount
//         startDate: undefined,
//         endDate: undefined,
//     },
// };


