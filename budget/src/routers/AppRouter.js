import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import BudgetDashboardPage from '../components/Dashboard';
import LoginPage from '../components/LoginPage';
import AddExpensePage from '../components/AddExpense';
import EditPage from '../components/Edit';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={ history }>
        <div>
            <Switch>
                <Route path="/" component={ LoginPage } exact={ true } />
                <PrivateRoute path="/dashboard" component={ BudgetDashboardPage } />
                <PrivateRoute path="/create" component={ AddExpensePage } />
                <PrivateRoute path="/edit/:id" component={ EditPage } />
                <Route path="/help" component={ HelpPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;