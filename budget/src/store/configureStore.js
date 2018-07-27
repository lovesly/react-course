import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// return a function to create a store. 
// question, where do we add the selectors and control the process?
export default () => {
    // store
    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    }));

    return store;
}

