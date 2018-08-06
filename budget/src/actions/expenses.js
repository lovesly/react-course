import database from '../firebase/firebaseV1';

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense,
});

export const startAddExpense = (expenseData = {}) => {
    // getState provided by thunk
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        // ref.key? reutrn ?
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense,
            }));
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id,
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // remove it from firebase, 
        // then update state? whole state of just 1?
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
        // what about error handling?
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
});

export const startEditExpense = (id, expense) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(expense).then(() => {
            dispatch(editExpense(id, expense));
        });
    };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// export const startSetExpenses;
// I'm really confused about the id, some operations doesn't require expense id,
// some needs it, bad design, piece of shit.
export const startSetExpenses = () => {
    // get data first, then transform object data to array.
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value')
        .then((snapshot) => {
            const expensesArray = [];
            snapshot.forEach((child) => {
                expensesArray.push({
                    id: child.key,
                    ...child.val(),
                });
            });
            dispatch(setExpenses(expensesArray));
        });
    };
};