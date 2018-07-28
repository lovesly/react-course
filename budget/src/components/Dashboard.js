import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';

const BudgetDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default BudgetDashboardPage;