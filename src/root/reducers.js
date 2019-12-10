import usersReducer from "../users/reducers.js";
import fundsReducer from "../funds/reducers.js";

//import { combineReducers } from "redux";
//const rootReducer = combineReducers({
//  fundsReducer,
//  ...
//});

const rootReducer = (state, action) => { 
    return {
        users: usersReducer((state === undefined)?undefined:state.users, action),
        funds: fundsReducer((state === undefined)?undefined:state.funds, action),
    }
}

export default rootReducer;