import React from 'react';
import './App.css';

import LoginContainer from '../containers/Login';
import DashboardContainer from '../containers/Dashboard';

const App = ({ address }) => {
    return <div>{address ? <DashboardContainer /> : <LoginContainer />}</div>;
};

export default App;
