import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

// change from stateless to class,so we don't have to redefine the inline functions 
// every single time the component gets rendered. 
export class EditPage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onClick = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>    
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={ this.props.expense }
                        onSubmit={ this.onSubmit }
                    />
                    <button className="button btn-4 btn-logout btn-m" onClick={ this.onClick }>Remove</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

// in real env, props is not defined??
const mapDispatchToProps = (dispatch) => ({ 
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);