import React from 'react';

import { GroupInput } from '../../core/components/groups.jsx';

import {
    LabelInputFund,
    LabelInputGenre,
} from './inputs.jsx';

import {
    MappedInputStringFund,
    MappedInputStringGenre,
    MappedToolInputFund,
    MappedToolInputGenre,
    MappedMessageInputFund,
    MappedMessageInputGenre,
} from '../containers/inputs.js';

// --- --- --- --- --- --- --- --- ---

export const GroupInputFund = ({namespace}) => (

    <GroupInput
        name='fund'
        label={<LabelInputFund />}
        input={<MappedInputStringFund namespace={namespace} />}
        tool={<MappedToolInputFund namespace={namespace} />}
        message={<MappedMessageInputFund namespace={namespace} />}
    />
)

export const GroupInputGenre = ({namespace}) => (

    <GroupInput
        name='genre'
        label={<LabelInputGenre />}
        input={<MappedInputStringGenre namespace={namespace} />}
        tool={<MappedToolInputGenre namespace={namespace} />}
        message={<MappedMessageInputGenre namespace={namespace} />}
    />
)
