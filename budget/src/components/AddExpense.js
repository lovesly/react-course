import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses'

// to test the unconnected version, export the class.
export class AddExpensePage extends React.Component {
    onSubmit = (expense) => { 
        console.log(expense);
        // ? why this one is easier to test?
        // props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={ this.onSubmit }
                />
            </div>
        );
    }
}

// to avoid inline functions? so use class based component??? wtf dude.
const mapDispatchToProps = (dispatch) => ({ 
    startAddExpense: (expense) => dispatch(startAddExpense(expense)) 
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);