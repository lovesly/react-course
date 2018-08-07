import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotalExpenses  from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    // why would this work?? set button container to flex does some magic. I guess it changes the display?
    // interesting, grid and inline-flex also work. Shit, I'm confused. 
    // display, z-index, :after, trasition, 
    return (
        <div className="page-header">
            <div className="content-container">
                    <h1 className="page-header__title">
                        Viewing <span>{ expenseCount }</span> { expenseWord } totalling <span>{ formattedExpensesTotal }</span> 
                    </h1>
                    <div className="page-header__actions">
                        <Link className="button btn-4" to="/create">Add Expense</Link>
                    </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectTotalExpenses(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);