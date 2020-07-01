import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

import { logout } from '../actions/login';
import { fetchData, sendAmount } from '../actions/dashboard';

const mapStateToProps = (state) => {
    const { dashboard, login } = state;
    return {
        address: login.address,
        balance: dashboard.balance,
        transactions: dashboard.transactions,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout());
        },
        fetchData: () => {
            dispatch(fetchData());
        },
        sendAmount: (toAddress, amount) => {
            dispatch(sendAmount(toAddress, amount));
            dispatch(fetchData());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
