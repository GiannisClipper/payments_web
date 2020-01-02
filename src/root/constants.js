const ORIGIN = 'http://localhost:8000';

const TOKEN_PREFIX = 'Token';

const METHODS = {
    POST: 'POST',
    GET: 'GET',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};

const DATA_KEYS = {
    USER: 'user',
    FUND: 'fund',
    FUNDS: 'funds',
};

const HOST_ARGS = {
    SIGNUP: {
        url: `${ORIGIN}/users/signup/`, 
        method: METHODS.POST, 
        reqDataKey: DATA_KEYS.USER, 
        resDataKey: DATA_KEYS.USER,
    },

    SIGNIN: {
        url: `${ORIGIN}/users/signin/`,
        method: METHODS.POST,
        reqDataKey: DATA_KEYS.USER,
        resDataKey: DATA_KEYS.USER,
    },

    CREATE_USERS: {
        url: `${ORIGIN}/users/`,
        method: METHODS.POST,
        reqDataKey: DATA_KEYS.USER,
        resDataKey: DATA_KEYS.USER,
    },

    RETRIEVE_USERS: {
    },
    UPDATE_USERS: {
    },
    DELETE_USERS: {
    },

    CREATE_FUNDS: {
        url: `${ORIGIN}/funds/`,
        method: METHODS.POST,
        reqDataKey: DATA_KEYS.FUND,
        resDataKey: DATA_KEYS.FUND,
    },

    RETRIEVE_FUNDS: {
        url: `${ORIGIN}/funds/list`,
        method: METHODS.GET,
        reqDataKey: null,
        resDataKey: DATA_KEYS.FUNDS,
    },

    UPDATE_FUNDS: {
        url: `${ORIGIN}/funds/<:id>/`,
        method: METHODS.PATCH,
        reqDataKey: DATA_KEYS.FUND,
        resDataKey: DATA_KEYS.FUND,
    },

    DELETE_FUNDS: {
        url: `${ORIGIN}/funds/<:id>/`,
        method: METHODS.DELETE,
        reqDataKey: DATA_KEYS.FUND,
        resDataKey: DATA_KEYS.FUND,
    },
};

const LABELS = {
    MENU_SIGNUP: 'ΕΓΓΡΑΦΗ ΝΕΟΥ ΧΡΗΣΤΗ',
    MENU_SIGNIN: 'ΣΥΝΔΕΣΗ ΧΡΗΣΤΗ',
    MENU_USERS: 'ΧΡΗΣΤΕΣ',
    MENU_FUNDS: 'ΛΟΓΑΡΙΑΣΜΟΙ',
    MENU_GENRES: 'ΚΑΤΗΓΟΡΙΕΣ ΕΙΣΠΡΑΞΕΩΝ/ΠΛΗΡΩΜΩΝ',
    MENU_PAYMENTS: 'ΕΙΣΠΡΑΞΕΙΣ/ΠΛΗΡΩΜΕΣ',
    MENU_SIGNOUT: 'ΑΠΟΣΥΝΔΕΣΗ',
};

module.exports = {
    TOKEN_PREFIX,
    HOST_ARGS,
    LABELS,
};