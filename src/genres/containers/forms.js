import { connect } from 'react-redux';

import { GenresForm } from '../components/forms.jsx';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedGenresForm = connect(
    state => ({
        mode: state[NAMESPACE].uiux.mode,
    }),
)(GenresForm);
