import types from './types';

export const login = (data) => ({
    type: types.LOGIN,
    payload: data,
});
export const signOut = (data) => ({
    type: types.SIGNOUT,
    payload: data
});