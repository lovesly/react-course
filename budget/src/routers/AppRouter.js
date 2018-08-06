import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import BudgetDashboardPage from '../components/Dashboard';
import LoginPage from '../components/LoginPage';
import AddExpensePage from '../components/AddExpense';
import EditPage from '../components/Edit';
import NotFoundPage from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={ history }>
        <div>
            <Switch>
                <PublicRoute path="/" component={ LoginPage } exact={ true } />
                <PrivateRoute path="/dashboard" component={ BudgetDashboardPage } />
                <PrivateRoute path="/create" component={ AddExpensePage } />
                <PrivateRoute path="/edit/:id" component={ EditPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;