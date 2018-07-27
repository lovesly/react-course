import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <p>{ props.name }</p>
        <p>{ props.expenses[0].createdAt }</p>
        <p>{ props.filters.text}</p>
    </div>
);

const mapStateToProps = (state) => {
    console.log(state.filters);
    return {
        name: 'zz',
        expenses: state.expenses,
        filters: state.filters,
    };
};

export default connect(mapStateToProps)(ExpenseList);