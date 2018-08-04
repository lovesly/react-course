import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const BudgetDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default BudgetDashboardPage;