import { connect } from 'react-redux';

import { NAMESPACE } from '../constants.js';

import { FundsForm } from '../components/forms.jsx';

// --- --- --- --- --- --- --- --- ---
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedFundsForm = connect(
    state => ({
        namespace: NAMESPACE,
        mode: state[NAMESPACE].uiux.mode,
    }), 
)(FundsForm);

