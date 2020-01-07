import React from 'react';

import { RelatedForm } from '../../core/components/forms.jsx';

import {
    MappedDivInputs,
    MappedDivItems,
} from '../containers.js';

import { HOST_ARGS } from '../../root/constants.js';

// --- --- --- --- --- --- --- --- ---

export const FundsRelatedForm = () => {

    const namespace = 'funds_related';
    const title = 'ΑΝΑΖΗΤΗΣΗ ΛΟΓΑΡΙΑΣΜΟΥ';

    return (
        <RelatedForm
            name = {namespace}
            title = {title}
            MappedDivInputs = {MappedDivInputs}
            MappedDivItems = {MappedDivItems}
            namespace = {namespace}
            hostArgs = {HOST_ARGS.RETRIEVE_FUNDS}
        />
    )
}
