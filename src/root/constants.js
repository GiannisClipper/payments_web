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
    GENRE: 'genre',
    GENRES: 'genres',
    PAYMENT: 'payment',
    PAYMENTS: 'payments',
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
        url: `${ORIGIN}/users/all-list`,
        method: METHODS.GET,
        reqDataKey: null,
        resDataKey: DATA_KEYS.USERS,
    },

    UPDATE_USERS: {
        url: `${ORIGIN}/users/<:id>/`,
        method: METHODS.PATCH,
        reqDataKey: DATA_KEYS.USER,
        resDataKey: DATA_KEYS.USER,
    },

    DELETE_USERS: {
        url: `${ORIGIN}/users/<:id>/`,
        method: METHODS.DELETE,
        reqDataKey: DATA_KEYS.USER,
        resDataKey: DATA_KEYS.USER,
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

    CREATE_GENRES: {
        url: `${ORIGIN}/genres/`,
        method: METHODS.POST,
        reqDataKey: DATA_KEYS.GENRE,
        resDataKey: DATA_KEYS.GENRE,
    },

    RETRIEVE_GENRES: {
        url: `${ORIGIN}/genres/list`,
        method: METHODS.GET,
        reqDataKey: null,
        resDataKey: DATA_KEYS.GENRES,
    },

    UPDATE_GENRES: {
        url: `${ORIGIN}/genres/<:id>/`,
        method: METHODS.PATCH,
        reqDataKey: DATA_KEYS.GENRE,
        resDataKey: DATA_KEYS.GENRE,
    },

    DELETE_GENRES: {
        url: `${ORIGIN}/genres/<:id>/`,
        method: METHODS.DELETE,
        reqDataKey: DATA_KEYS.GENRE,
        resDataKey: DATA_KEYS.GENRE,
    },

    CREATE_PAYMENTS: {
        url: `${ORIGIN}/payments/`,
        method: METHODS.POST,
        reqDataKey: DATA_KEYS.PAYMENT,
        resDataKey: DATA_KEYS.PAYMENT,
    },

    RETRIEVE_PAYMENTS: {
        url: `${ORIGIN}/payments/list`,
        method: METHODS.GET,
        reqDataKey: null,
        resDataKey: DATA_KEYS.PAYMENTS,
    },

    UPDATE_PAYMENTS: {
        url: `${ORIGIN}/payments/<:id>/`,
        method: METHODS.PATCH,
        reqDataKey: DATA_KEYS.PAYMENT,
        resDataKey: DATA_KEYS.PAYMENT,
    },

    DELETE_PAYMENTS: {
        url: `${ORIGIN}/payments/<:id>/`,
        method: METHODS.DELETE,
        reqDataKey: DATA_KEYS.PAYMENT,
        resDataKey: DATA_KEYS.PAYMENT,
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