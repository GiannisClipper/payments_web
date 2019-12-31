import { usersReducer, authReducer } from '../users/reducers.js';
import { fundsReducer } from '../funds/reducers.js';

const rootReducer = (state, action) => {
    return {
        users: usersReducer((state === undefined)?undefined:state.users, action),
        auth: authReducer((state === undefined)?undefined:state.auth, action),
        funds: fundsReducer((state === undefined)?undefined:state.funds, action),
    }
}

export default rootReducer;
