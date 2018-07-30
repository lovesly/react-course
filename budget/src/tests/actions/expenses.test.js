import { addExpense, editExpense, removeExpense  } from '../../actions/expenses';

test(`should setup remove expense action object`, () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test(`should setup edit expense action object`, () => {
    const updates = {
        note: 'New note value',
        amount: 500,
    }
    const action = editExpense('123abc', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates,
    });
});

test(`should setup add expense action object with given value`, () => {
    const expenseData = {
        description: 'Rent',
        amount: 1250,
        createdAt: 1000,
        note: 'This was last months rent',
    };
    const result = addExpense(expenseData);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String),
        }
    });
});

test(`should setup add expense action object with default`, () => {
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            description: '',
            note: '',
            amount: 0, 
            createdAt: 0,
            id: expect.any(String),
         }
    });
});