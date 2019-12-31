import React from 'react';

import {
    DivFormMenu,
    DivCreateMenu,
    DivRetrieveMenu,
    DivUpdateMenu,
    DivDeleteMenu,
} from '../../core/components/menus.jsx';

import {
    MappedDivInputs,
    MappedDivItems,
} from '../containers.js';

import { LABELS } from '../constants.js';

import { HOST_ARGS } from '../../root/constants.js';

// --- --- --- --- --- --- --- --- ---

export const FundsForm = ({namespace, mode}) => {

    return (mode === 'CREATE')?(
        <div className='form funds create'>
            <div className='title'>{LABELS.FORM_FUNDS_TITLE}</div>
            <MappedDivInputs namespace={namespace} />
            <DivCreateMenu namespace={namespace} hostArgs={HOST_ARGS.CREATE_FUNDS} />
        </div>

    ):(mode === 'RETRIEVE')?(
        <div className='form funds retrieve'>
            <div className='title'>{LABELS.FORM_FUNDS_TITLE}</div>
            <MappedDivInputs namespace={namespace} />
            <DivRetrieveMenu namespace={namespace} hostArgs={HOST_ARGS.RETRIEVE_FUNDS} />
        </div>

    ):(mode === 'UPDATE')?(
        <div className='form funds update'>
            <div className='title'>{LABELS.FORM_FUNDS_TITLE}</div>
            <MappedDivInputs namespace={namespace} />
            <DivUpdateMenu namespace={namespace} hostArgs={HOST_ARGS.UPDATE_FUNDS} />
        </div>

    ):(mode === 'DELETE')?(
        <div className='form funds delete'>
            <div className='title'>{LABELS.FORM_FUNDS_TITLE}</div>
            <MappedDivInputs namespace={namespace} />
            <DivDeleteMenu namespace={namespace} hostArgs={HOST_ARGS.DELETE_FUNDS} />
        </div>

    ):(
        <div className='form funds list'>
            <div className='title'>{LABELS.FORM_FUNDS_TITLE}</div>
            <MappedDivItems namespace={namespace} />
            <DivFormMenu namespace={namespace} />
        </div>
    );
};
