const ORIGIN = 'http://localhost:8000/';

const POST = 'POST';
const GET = 'GET';
const PATCH = 'PATCH';
const DELETE = 'DELETE';

const TOKEN_PREFIX = 'Token';

const HOST_ARGS = {
    SIGNUP: {url: `${ORIGIN}users/signup/`, method: POST, namespace: 'user'},

    SIGNIN: {url: `${ORIGIN}users/signin/`, method: POST, namespace: 'user'},

    CREATE_USER: {url: `${ORIGIN}users/`, method: POST, namespace: 'user'},

    RETRIEVE_USER: '',
    UPDATE_USER: '',
    DELETE_USER: '',
};

module.exports = {
    TOKEN_PREFIX,
    HOST_ARGS,
};