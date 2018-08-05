import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebaseV1';

const store = configureStore();

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('log in');
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            // I don't understand, if we just logged in, the current location must be '/'
            // then why do we need to check??? OK, refresh the page will triggered this function.
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        // looks like if already log out, then click logout again, nothing will happen?
        // because the auth remains log out after that
        // so history.push is not getting called.
        console.log('log out');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

// another question, if we already logged in, then manully type in the url 'localhost:8080'
// we should see the LoginPage right? but somehow the onAuthStateChanged function is triggered
// so the page redirects to '/dashboard' automatically. fucking wierd.