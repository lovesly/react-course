import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    addExpense, 
    editExpense, 
    removeExpense, 
    startAddExpense, 
    setExpenses, 
    startSetExpenses,
    startRemoveExpense,
    startEditExpense,  
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebaseV1';

const createMockStore = mockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test(`should setup remove expense action object`, () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test(`should remove expense from firebase and update store`, (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    // validate store
    store.dispatch(startRemoveExpense({ id, })).then(() => {
        const actions = store.getActions();
        console.log(actions);
        expect(actions[0].id).toBe(id);
        // validate firebase
        database.ref(`expenses/${id}`).once('value').then((snapshot) => {
            // expect(snapshot.val()).toBe(null);
            expect(snapshot.val()).toBeFalsy();
            done();
        });
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

test(`should edit the expense in firebase and update store`, (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    const updateData = {
        amount: 10000, 
        note: 'updated',
    }
    // validate store
    store.dispatch(startEditExpense(id, updateData)).then(() => {
        const actions = store.getActions();
        console.log(actions);
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates: updateData
        });
        // validate firebase
        database.ref(`expenses/${id}`).once('value').then((snapshot) => {
            // expect(snapshot.val()).toBe(null);
            // snapshot doesn't have id....shit
            expect(snapshot.val().amount).toBe(updateData.amount);
            expect(snapshot.val().note).toBe(updateData.note);
            done();
        });
    });
});

test(`should setup add expense action object with given value`, () => {
    const result = addExpense(expenses[1]);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1],
    });
});

test(`should add expense to database and store`, (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: '3000',
        note: 'Gaming',
        createdAt: 1000,
    };
    // wierd, store.dispatch returns a promise? or just pass the inside function return value?
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData,
            }
        });
        // return a promise
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test(`should add expense with defaults to database and store`, (done) => {
    const store = createMockStore({});
    const defaultExpense = {
        description: '',
        note: '',
        amount: 0, 
        createdAt: 0,
    };
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultExpense,
            }
        });
        // return a promise
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultExpense);
        done();
    });
});

test(`should setup set expense action object with data`, () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses,
    });
});

test(`should retrive data from database and set start expenses data`, (done) => {
    const store = createMockStore({});
    // wierd, store.dispatch returns a promise? or just pass the inside function return value?
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        console.log(actions);
        expect(actions[0].expenses).toEqual(expenses);
        done();
    });
});