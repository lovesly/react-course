import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Budget</h1>
            <p>It's time to go, sly is waiting for me</p>
            <button className="button btn-4" onClick={ startLogin }><span>Login with Google</span></button>
        </div>
    </div>

);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
