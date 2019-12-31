const ORIGIN = 'http://localhost:8000';

const POST = 'POST';
const GET = 'GET';
const PATCH = 'PATCH';
const DELETE = 'DELETE';

const TOKEN_PREFIX = 'Token';

const HOST_ARGS = {
    SIGNUP: {url: `${ORIGIN}/users/signup/`, method: POST, reqDataKey: 'user', resDataKey: 'user'},
    SIGNIN: {url: `${ORIGIN}/users/signin/`, method: POST, reqDataKey: 'user', resDataKey: 'user'},

    CREATE_USERS: {url: `${ORIGIN}/users/`, method: POST, reqDataKey: 'user', resDataKey: 'user'},

    RETRIEVE_USERS: '',
    UPDATE_USERS: '',
    DELETE_USERS: '',

    CREATE_FUNDS: {url: `${ORIGIN}/funds/`, method: POST, reqDataKey: 'fund', resDataKey: 'fund'},
    RETRIEVE_FUNDS: {url: `${ORIGIN}/funds/list`, method: GET, reqDataKey: null, resDataKey: 'funds'},
    UPDATE_FUNDS: {url: `${ORIGIN}/funds/<:id>/`, method: PATCH, reqDataKey: 'fund', resDataKey: 'fund'},
    DELETE_FUNDS: {url: `${ORIGIN}/funds/<:id>/`, method: DELETE, reqDataKey: 'fund', resDataKey: 'fund'},
};

module.exports = {
    TOKEN_PREFIX,
    HOST_ARGS,
};