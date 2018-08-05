import { firebase, googleAuthProvider } from '../firebase/firebaseV1';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

// returns a function?
export const startLogin = () => {
    return () => {
        // addScope??
        googleAuthProvider.addScope('profile');
        googleAuthProvider.addScope('email');
        googleAuthProvider.setCustomParameters({
            prompt: 'select_account'
        });
        return firebase.auth().signInWithPopup(googleAuthProvider).then(function(result) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            console.log(token);
            // The signed-in user info.
            var user = result.user;
            console.log(user);
        });
    };
};

// what is really happening when calling dispatch(startLogin()) ??
// for these two functions, there is no dispatch, then we do we need to 
// use the mapDispatchToProps?

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};