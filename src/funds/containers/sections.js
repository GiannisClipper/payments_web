import { connect } from 'react-redux';

import { NAMESPACE } from '../constants.js';

import { 
    SectionInputs,
    SectionList,
} from '../components/sections.jsx';

// --- --- --- --- --- --- --- --- ---

export const MappedSectionInputs = connect(
    state => ({
        message: state[NAMESPACE].errors.errors,
    }),
)(SectionInputs);

export const MappedSectionList = connect(
    (state, {items}) => ({
        items: state[NAMESPACE].items,
    }),
)(SectionList);
