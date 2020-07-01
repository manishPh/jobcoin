import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import AppContainer from './containers/App';
import reducer from './reducers';
import './index.css';
// import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, undefined, applyMiddleware(thunkMiddleware, createLogger()));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
