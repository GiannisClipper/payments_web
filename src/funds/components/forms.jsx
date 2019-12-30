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
} from '../containers.js';

import { HOST_ARGS } from '../../root/constants.js';

// --- --- --- --- --- --- --- --- ---

export const FundsForm = ({namespace, mode}) => {

    return (mode === 'CREATE')?(
        <div className='form create'>
            <MappedDivInputs namespace={namespace} />
            <DivCreateMenu namespace={namespace} hostArgs={HOST_ARGS.CREATE_FUNDS} />
        </div>

    ):(mode === 'RETRIEVE')?(
        <div className='form retrieve'>
            <MappedDivInputs namespace={namespace} />
            <DivRetrieveMenu namespace={namespace} />
        </div>

    ):(mode === 'UPDATE')?(
        <div className='form update'>
            <MappedDivInputs namespace={namespace} />
            <DivUpdateMenu namespace={namespace} />
        </div>

    ):(mode === 'DELETE')?(
        <div className='form delete'>
            <MappedDivInputs namespace={namespace} />
            <DivDeleteMenu namespace={namespace} />
        </div>

    ):(
        <div className='form list'>
            <MappedDivInputs namespace={namespace} />
            <DivFormMenu namespace={namespace} />
        </div>
    );
};
