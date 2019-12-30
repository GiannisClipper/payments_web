import React from 'react';

import {
    MappedButtonSelectCreate,
    MappedButtonSelectRetrieve,
    MappedButtonSelectUpdate,
    MappedButtonSelectDelete,

    MappedButtonRequestCreate,
    MappedButtonRequestRetrieve,
    MappedButtonRequestUpdate,
    MappedButtonRequestDelete,

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
            <MappedButtonRequestCreate {...props} />
            <MappedButtonCloseData {...props} />
        </div>
    );
};

export const DivUpdateMenu = props => {
    return (
        <div>
            <MappedButtonRequestUpdate {...props} />
            <MappedButtonCloseData {...props} />
        </div>
    );
};

export const DivRetrieveMenu = props => {
    return (
        <div>
            <MappedButtonRequestRetrieve {...props} />
            <MappedButtonCloseData {...props} />
        </div>
    );
};

export const DivDeleteMenu = props => {
    return (
        <div>
            <MappedButtonRequestDelete {...props} />
            <MappedButtonCloseData {...props} />
        </div>
    );
};
