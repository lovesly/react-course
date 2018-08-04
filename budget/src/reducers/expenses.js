// expenses Reducer
const defaultExpenseState = [];
export default (state = defaultExpenseState, action) => {
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
        case 'SET_EXPENSES':
            return action.expenses;
        default: 
            return state;
    }
};

