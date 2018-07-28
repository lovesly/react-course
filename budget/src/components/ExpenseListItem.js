import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// where the fuck does dispatch come from?
const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <h3>{ description }</h3>
        <p>{ amount } - { createdAt }</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
);

// if no mapStateToProps, how can we pass the params??
export default connect()(ExpenseListItem);




