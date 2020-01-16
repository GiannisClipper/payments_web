import { connect } from 'react-redux';

import { FormPayments } from '../components/forms.jsx';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedFormPayments = connect(
    state => ({
        mode: state[NAMESPACE].uiux.mode,
    }),
)(FormPayments);
