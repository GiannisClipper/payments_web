import { connect } from 'react-redux';

import {
    FormSignup,
    FormSignin,
    FormSignout,
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

export const MappedFormSignup = connect(
    state => ({}),
    dispatch => ({
        onSelectCreate: () => dispatch(onSelectCreate(NAMESPACE)),
    })
)(FormSignup);

export const MappedFormSignin = connect(
    state => ({}),
    dispatch => ({
        onSelectRetrieve: () => dispatch(onSelectRetrieve(NAMESPACE)),
    })
)(FormSignin);

export const MappedFormSignout = connect(
    state => ({
        auth: state.auth,
    }),
    dispatch => ({
        onSignout: (auth, message) => dispatch(onSignout(auth, message)),
    })
)(FormSignout);
