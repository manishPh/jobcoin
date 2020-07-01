import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        address: state.login.address,
    };
};

export default connect(mapStateToProps, null)(App);
