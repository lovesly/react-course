import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

// change from stateless to class,so we don't have to redefine the inline functions 
// every single time the component gets rendered. 
export class EditPage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onClick = () => {
        this.props.removeExpense();
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={ this.props.expense }
                    onSubmit={ this.onSubmit }
                />
                <button onClick={ this.onClick }>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({ 
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: () => dispatch(removeExpense({ id: props.expense.id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);