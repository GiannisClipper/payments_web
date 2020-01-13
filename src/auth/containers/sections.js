import { connect } from 'react-redux';

import {
    SignupSectionInputs,
    SigninSectionInputs,
} from '../components/sections.jsx';

import { NAMESPACE } from '../../users/constants.js';

// --- --- --- --- --- --- --- --- ---

export const MappedSignupSectionInputs = connect(
    state => ({
        message: state[NAMESPACE].errors.errors,
    }),
)(SignupSectionInputs);

export const MappedSigninSectionInputs = connect(
    state => ({
        message: state[NAMESPACE].errors.errors,
    }),
)(SigninSectionInputs);
