import { ACTION_LOGIN, ACTION_LOGOUT } from '../actions/actionTypes';

const defaultState = {
    address: null,
};

const login = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_LOGIN:
            return { address: action.data };
        case ACTION_LOGOUT:
            return defaultState;
        default:
            return state;
    }
};

export default login;
