import React from 'react';

import { GroupInput } from '../../core/components/groups.jsx';

import {
    LabelInputFund,
    LabelInputGenre,
} from './inputs.jsx';

import {
    MappedInputStringFund,
    MappedInputStringGenre,
} from '../containers/inputs.js';

// --- --- --- --- --- --- --- --- ---

export const GroupInputFund = ({namespace}) => (

    <GroupInput
        name='fund'
        label={<LabelInputFund />}
        input={<MappedInputStringFund namespace={namespace} />}
        message={null}
    />
)

export const GroupInputGenre = ({namespace}) => (

    <GroupInput
        name='genre'
        label={<LabelInputGenre />}
        input={<MappedInputStringGenre namespace={namespace} />}
        message={null}
    />
)
