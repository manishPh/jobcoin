import { ACTION_SEND_OK, ACTION_FETCH_DATA } from '../actions/actionTypes';

const defaultState = {
    balance: null,
    transactions: [],
};

const dashboard = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_SEND_OK:
            return {};
        case ACTION_FETCH_DATA:
            const { balance, transactions } = action.data;
            return { balance, transactions };
        default:
            return state;
    }
};

export default dashboard;
