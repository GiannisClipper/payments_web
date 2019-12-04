import fundsReducer from "../funds/reducers.js";

//import { combineReducers } from "redux";
//const rootReducer = combineReducers({
//  fundsReducer,
//  ...
//});

const rootReducer = (state, action) => { 
    return {
        funds: fundsReducer((state === undefined)?undefined:state.funds, action)
    }
}

export default rootReducer;