import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

const expense4 = {
    id: '4',
    description: 'Network',
    note: '',
    amount: 4000,
    createdAt: 1000,
}

test(`should set default state`, () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

// add expense
test(`should add a new expense`, () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense4,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense4]);
});

// edit expense
test(`should edit expense`, () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount: 125,
            description: 'edited expense',
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(125);
    expect(state[1].description).toBe(action.updates.description);
});

// edit expense
test(`should not edit expenses if id not found`, () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            amount: 125,
            description: 'edited expense',
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

// remove expense
test(`should remove expense by id`, () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

// remove non-exist expense
test(`should not remove expense if id not found`, () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '123',
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test(`should set expenses`, () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]],
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});


