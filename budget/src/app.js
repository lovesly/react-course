import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 100,
    createdAt: 1000,
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 300,
    createdAt: 1500,
}));

const expenseThree = store.dispatch(addExpense({
    description: 'Condom',
    amount: 500,
    createdAt: 750,
}));

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
