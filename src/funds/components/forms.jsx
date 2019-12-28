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

// --- --- --- --- --- --- --- --- ---

export const FundsForm = ({namespace, mode}) => {
    const props = {namespace};

    return (mode === 'CREATE')?(
        <div className='form'>
            <MappedDivInputs {...props} />
            <DivCreateMenu namespace={namespace} path={'/funds/'} />
        </div>

    ):(mode === 'RETRIEVE')?(
        <div className='form'>
            <MappedDivInputs {...props} />
            <DivRetrieveMenu {...props} />
        </div>

    ):(mode === 'UPDATE')?(
        <div className='form'>
            <MappedDivInputs {...props} />
            <DivUpdateMenu {...props} />
        </div>

    ):(mode === 'DELETE')?(
        <div className='form'>
            <MappedDivInputs {...props} />
            <DivDeleteMenu {...props} />
        </div>

    ):(
        <div className='form'>
            <MappedDivInputs {...props} />
            <DivFormMenu {...props} />
        </div>
    );
};
