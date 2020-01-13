import { connect } from 'react-redux';

import { 
    SectionInputs,
    SectionList,
} from '../components/sections.jsx';

import { RelatedList } from '../../core/components/sections.jsx';

import { onSelectRelated } from '../../core/actions.js';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const MappedSectionInputs = connect(
    state => ({
        message: state[NAMESPACE].errors.errors,
        relatedNamespace: state[NAMESPACE].related.namespace,
    }),
    ({})
)(SectionInputs);

export const MappedSectionList = connect(
    (state, {items}) => ({
        items: state[NAMESPACE].items,
    }),
    ({})
)(SectionList);

export const MappedRelatedFundList = connect(
    state => ({
        items: state[NAMESPACE].related.fund.items,
    }),
    dispatch => ({
        onSelect: id => dispatch(onSelectRelated(NAMESPACE, id)),
    })

)(RelatedList);
