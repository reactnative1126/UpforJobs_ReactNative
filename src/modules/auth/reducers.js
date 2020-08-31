import types from './types';

const initialState = {
    logged: false,
    user_info: null,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                logged: true,
                user_info: action.payload,
            };
        case types.SIGNOUT:
            return {
                ...state,
                logged: false,
                user_info: initialState
            };
        default:
            return state;
    }
}