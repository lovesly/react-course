import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from  '../components/Header';

export const PrivateRoute = ({
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
    // wtat is this prop inside arrow function
    // built-in props like location, history
    // react 里参数是如何生成/传递的？
    // 原本自动传递的参数， 现在需要手动， 原理是？
    <Route {...rest} component={(props) => {
        // console.log(props);
        return (
            isAuthenticated ? (
                <div>
                    <Header />
                    <Component {...props} />
                </div>
            ) : (
                <Redirect to="/" />
            )
        )
    }}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);



