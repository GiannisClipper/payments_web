import { connect } from 'react-redux';

import { SectionRelated } from '../../core/components/sections.jsx';

import { onSelectRelated } from '../../core/actions.js';

// --- --- --- --- --- --- --- --- ---

export const MappedSectionRelatedFund = connect(
    (state, {namespace}) => ({
        items: state[namespace].related.fund.items,
    }),
    (dispatch, {namespace}) => ({
        onSelect: id => dispatch(onSelectRelated(namespace, id)),
    })

)(SectionRelated);

export const MappedSectionRelatedGenre = connect(
    (state, {namespace}) => ({
        items: state[namespace].related.genre.items,
    }),
    (dispatch, {namespace}) => ({
        onSelect: id => dispatch(onSelectRelated(namespace, id)),
    })

)(SectionRelated);