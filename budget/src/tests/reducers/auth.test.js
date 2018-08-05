import authReducer from '../../reducers/auth';

test(`should setup login auth values`, () => {
    const uid = 'someId'
    const state = authReducer(undefined, { type: 'LOGIN', uid });
    expect(state).toEqual({
        uid
    });
});

test(`should setup logout auth values`, () => {
    const state = authReducer(undefined, { type: 'LOGOUT' });
    expect(state).toEqual({});
});