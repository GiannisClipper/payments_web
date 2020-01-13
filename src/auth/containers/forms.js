import { connect } from 'react-redux';

import {
    SignupForm,
    SigninForm,
    SignoutForm,
} from '../components/forms.jsx';

import {
    onSelectCreate,
    onSelectRetrieve,
} from '../../core/actions.js';

import { 
    onSignout, 
} from '../actions.js';

import { NAMESPACE } from '../../users/constants.js';

// --- --- --- --- --- --- --- --- ---
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedSignupForm = connect(
    state => ({}),
    dispatch => ({
        onSelectCreate: () => dispatch(onSelectCreate(NAMESPACE)),
    })
    )(SignupForm);

export const MappedSigninForm = connect(
    state => ({}),
    dispatch => ({
        onSelectRetrieve: () => dispatch(onSelectRetrieve(NAMESPACE)),
    })
)(SigninForm);

export const MappedSignoutForm = connect(
    state => ({
        auth: state.auth,
    }),
    dispatch => ({
        onSignout: (auth, message) => dispatch(onSignout(auth, message)),
    })
)(SignoutForm);
