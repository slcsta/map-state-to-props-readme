import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

// imported Provider from React Redux
// used Provider to wrap our React application
// passed our store instance directly into the App component, we now pass it in to Provider as a prop, which will make it available to other components
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById('root')
);
