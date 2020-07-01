import { ACTION_FETCH_DATA } from '../actions/actionTypes';

const fetchAddressData = (dispatch, address) => {
    return fetch(`https://jobcoin.gemini.com/chrome-crewman/api/addresses/${address}`)
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: ACTION_FETCH_DATA,
                data,
            });
        });
};
export const fetchData = () => (dispatch, getState) => {
    const { address } = getState().login;
    return fetchAddressData(dispatch, address);
};

export const sendAmount = (toAddress, amount) => (dispatch, getState) => {
    const { address: fromAddress } = getState().login;
    const data = {
        fromAddress,
        toAddress,
        amount,
    };
    return fetch('https://jobcoin.gemini.com/chrome-crewman/api/transactions', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(data),
    })
        .then((response) => {
            return fetchAddressData(dispatch, fromAddress);
        })
        .catch((e) => {
            console.log(e);
        });
};
