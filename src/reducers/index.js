import { combineReducers } from 'redux';

import login from './login';
import dashboard from './dashboard';

const jobCoinApp = combineReducers({
    login,
    dashboard,
});

export default jobCoinApp;
