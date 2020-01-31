import React from 'react';

import { GroupInput } from '../../core/components/groups.jsx';

import {
    LabelInputFund,
    LabelInputGenre,
} from './inputs.jsx';

import {
    MappedInputStringFund,
    MappedInputStringGenre,
    MappedMessageInputFund,
    MappedMessageInputGenre,
} from '../containers/inputs.js';

// --- --- --- --- --- --- --- --- ---

export const GroupInputFund = ({namespace}) => (

    <GroupInput
        name='fund'
        label={<LabelInputFund />}
        input={<MappedInputStringFund namespace={namespace} />}
        message={<MappedMessageInputFund namespace={namespace} />}
    />
)

export const GroupInputGenre = ({namespace}) => (

    <GroupInput
        name='genre'
        label={<LabelInputGenre />}
        input={<MappedInputStringGenre namespace={namespace} />}
        message={<MappedMessageInputGenre namespace={namespace} />}
    />
)
