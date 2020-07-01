import { connect } from 'react-redux';

import Login from '../components/Login';

import { login } from '../actions/login';

const mapDispatchToProps = (dispatch) => {
    return {
        login: (address) => {
            dispatch(login(address));
        },
    };
};

export default connect(null, mapDispatchToProps)(Login);
