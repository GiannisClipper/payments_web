const ORIGIN = 'http://localhost:8000/';

const POST = 'POST';
const GET = 'GET';
const PATCH = 'PATCH';
const DELETE = 'DELETE';

const TOKEN_PREFIX = 'Token';

const HOST_ARGS = {
    SIGNUP: {url: `${ORIGIN}users/signup/`, method: POST, jsonKey: 'user'},
    
    SIGNIN: {url: `${ORIGIN}users/signin/`, method: POST, jsonKey: 'user'},

    CREATE_USERS: {url: `${ORIGIN}users/`, method: POST, jsonKey: 'user'},

    RETRIEVE_USERS: '',
    UPDATE_USERS: '',
    DELETE_USERS: '',

    CREATE_FUNDS: {url: `${ORIGIN}funds/`, method: POST, jsonKey: 'fund'},

    RETRIEVE_FUNDS: '',
    UPDATE_FUNDS: '',
    DELETE_FUNDS: '',

};

module.exports = {
    TOKEN_PREFIX,
    HOST_ARGS,
};