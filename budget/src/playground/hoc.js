// Higher order component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state



import React from 'react';
import ReactDOM from 'react-dom';

// html snipet is not support here???
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info.</p> }
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    // what is the difference??
    return (props) => (
        <div>
            { props.isAuthenticated === true ? <WrappedComponent {...props} /> : <p>You don't have the right</p> }
            { props.isAuthenticated ? (<WrappedComponent {...props} /> ) : (<p>You don't have the right</p>) }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={ true } info="some details"/>, document.getElementById('app'));