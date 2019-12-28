import React from 'react';

import {
    MappedButtonSelectCreate,
    MappedButtonSelectRetrieve,
    MappedButtonSelectUpdate,
    MappedButtonSelectDelete,

    MappedButtonVerifyCreate,
    MappedButtonVerifyRetrieve,
    MappedButtonVerifyUpdate,
    MappedButtonVerifyDelete,

    MappedButtonCloseData,
    MappedButtonCloseForm,

} from '../containers.js';

// --- --- --- --- --- --- --- --- ---

export const DivFormMenu = props => {
    return (
        <div>
            <MappedButtonSelectCreate {...props} />
            <MappedButtonSelectRetrieve {...props} />
            <MappedButtonCloseForm {...props} />
        </div>
    );
};

export const DivItemMenu = props => {
    return (
        <div>
            <MappedButtonSelectUpdate {...props} />
            <MappedButtonSelectDelete {...props} />
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

export const DivCreateMenu = props => {
    return (
        <div>
            <MappedButtonVerifyCreate {...props} />
            <MappedButtonCloseData {...props} />
        </div>
    );
};

export const DivUpdateMenu = props => {
    return (
        <div>
            <MappedButtonVerifyUpdate {...props} />
            <MappedButtonCloseData {...props} />
        </div>
    );
};

export const DivRetrieveMenu = props => {
    return (
        <div>
            <MappedButtonVerifyRetrieve {...props} />
            <MappedButtonCloseData {...props} />
        </div>
    );
};

export const DivDeleteMenu = props => {
    return (
        <div>
            <MappedButtonVerifyDelete {...props} />
            <MappedButtonCloseData {...props} />
        </div>
    );
};
