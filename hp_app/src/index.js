import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import App from './components/App';

const reducer = (() => {
    return {
        title: "Temp HP Store!"
    }
})

const store = createStore(reducer)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

