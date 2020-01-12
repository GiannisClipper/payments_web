import React from 'react';

import { CRUDForm } from '../../core/components/forms.jsx';

import { NAMESPACE } from '../constants.js';

import { LABELS, HOST_ARGS } from '../../root/constants.js';

import {
    MappedGroupInputs,
    MappedGroupItems,
} from '../containers.js';

// --- --- --- --- --- --- --- --- ---

export const FundsForm = ({mode}) => (

    <CRUDForm 
        namespace={NAMESPACE}
        title={LABELS.MENU_FUNDS}
        mode={mode}

        hostArgs={
            mode === 'CREATE'?HOST_ARGS.CREATE_FUNDS:
            mode === 'RETRIEVE'?HOST_ARGS.RETRIEVE_FUNDS:
            mode === 'UPDATE'?HOST_ARGS.UPDATE_FUNDS:
            mode === 'DELETE'?HOST_ARGS.DELETE_FUNDS:
            null
        }

        GroupInputs={
            mode === 'CREATE'?MappedGroupInputs:
            mode === 'RETRIEVE'?MappedGroupInputs:
            mode === 'UPDATE'?MappedGroupInputs:
            mode === 'DELETE'?MappedGroupInputs:
            MappedGroupItems
        }
    />
)
