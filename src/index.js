import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./root/reducers.js";
import { MappedApp } from "./root/containers/app.js";

// import "./styles.css";

let store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

store.subscribe(() => console.log('store update:', store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <MappedApp />
    </Provider>,
    document.getElementById("root")
);