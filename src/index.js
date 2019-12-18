import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./root/components/App.jsx";
import rootReducer from "./root/reducers.js";
// import "./styles.css";

let store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

store.subscribe(() => console.log('store update:', store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);