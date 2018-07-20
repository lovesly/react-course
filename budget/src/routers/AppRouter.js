import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BudgetDashboardPage from '../components/Dashboard';
import AddExpensePage from '../components/AddExpense';
import EditPage from '../components/Edit';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ BudgetDashboardPage } exact={ true }/>
                <Route path="/create" component={ AddExpensePage } />
                <Route path="/edit/:id" component={ EditPage } />
                <Route path="/help" component={ HelpPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;