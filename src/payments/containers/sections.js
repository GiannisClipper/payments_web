import { connect } from 'react-redux';

import { 
    SectionInputs,
    SectionList,
} from '../components/sections.jsx';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const MappedSectionInputs = connect(
    state => ({
        message: state[NAMESPACE].errors.errors,
        relatedNamespace: state[NAMESPACE].uiux.relatedNamespace,
    }),
)(SectionInputs);

export const MappedSectionList = connect(
    state => ({
        items: state[NAMESPACE].items,
    }),
)(SectionList);
