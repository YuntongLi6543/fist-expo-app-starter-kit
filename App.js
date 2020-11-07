import React from 'react';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/redux/reducers';

import MainApp from './src/MainApp'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

function App() {
    return (
        <Provider store={store}>
            <MainApp />
        </Provider>
    );
}

export default App;