import { usersReducer } from '../users/reducers.js';
import { authReducer } from '../auth/reducers.js';
import { fundsReducer } from '../funds/reducers.js';
import { genresReducer } from '../genres/reducers.js';
import { paymentsReducer } from '../payments/reducers.js';

const rootReducer = (state, action) => {
    return {
        users: usersReducer((state === undefined)?undefined:state.users, action),
        auth: authReducer((state === undefined)?undefined:state.auth, action),
        funds: fundsReducer((state === undefined)?undefined:state.funds, action),
        genres: genresReducer((state === undefined)?undefined:state.genres, action),
        payments: paymentsReducer((state === undefined)?undefined:state.payments, action),
    }
}

export default rootReducer;
