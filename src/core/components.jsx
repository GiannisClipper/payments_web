import { useHistory } from "react-router-dom";

import React from 'react';

// --- --- --- --- --- --- --- --- ---

export const BtSelectCreate = ({actions}) => {
    return (
        <button
            onClick={() => actions.onSelectCreate()}
        >Νέα εγγραφή</button>
    );
};

export const BtSelectRetrieve = ({actions}) => {
    return (
        <button
            onClick={() => actions.onSelectRetrieve()}
        >Αναζήτηση</button>
    );
};

export const BtSelectUpdate = ({data, actions}) => {
    return (
        <button
            onClick={() => actions.onSelectUpdate(data)}
        >Τροποποίηση</button>
    );
};

export const BtSelectDelete = ({data, actions}) => {
    return (
        <button
            onClick={() => actions.onSelectDelete(data)}
        >Διαγραφή</button>
    );
};

export const BtCloseForm = ({initialData, actions}) => {
    let history = useHistory();

    return (
        <button
            onClick={() => {
                actions.onCloseForm(initialData);
                actions.onGoHome(history);
            }}
        >Κλείσιμο</button>
    );
};

export const BtGoHome = actions => {
    let history = useHistory();

    return (
        <button
            onClick={() => actions.onGoHome(history)}
        >Κλείσιμο</button>
    );
};

export const DvFormMenu = props => {
    return (
        <div>
            <BtSelectCreate {...props} />
            <BtSelectRetrieve {...props} />
            <BtCloseForm {...props} />
        </div>
    );
};

export const DvItemMenu = props => {
    return (
        <div>
            <BtSelectUpdate {...props} />
            <BtSelectDelete {...props} />
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

export const BtVerifyCreate = ({uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyCreate(data)}
            disabled={!uiux.allowSave}
        >Αποθήκευση</button>
    );
};

export const BtVerifyUpdate = ({uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyUpdate(data)}
            disabled={!uiux.allowSave}
        >Αποθήκευση</button>
    );
};

export const BtVerifyRetrieve = ({data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyRetrieve(data)}
        >Αναζήτηση</button>
    );
};

export const BtVerifyDelete = ({data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyDelete(data)}
        >Επιβεβαίωση</button>
    );
};

export const BtCloseData = ({initialData, actions}) => {
    return (
        <button
            onClick={() => actions.onCloseData(initialData)}
        >Κλείσιμο</button>
    );
};

export const DvCreateMenu = props => {
    return (
        <div>
            <BtVerifyCreate {...props} />
            <BtCloseData {...props} />
        </div>
    );
};

export const DvUpdateMenu = props => {
    return (
        <div>
            <BtVerifyUpdate {...props} />
            <BtCloseData {...props} />
        </div>
    );
};

export const DvRetrieveMenu = props => {
    return (
        <div>
            <BtVerifyRetrieve {...props} />
            <BtCloseData {...props} />
        </div>
    );
};

export const DvDeleteMenu = props => {
    return (
        <div>
            <BtVerifyDelete {...props} />
            <BtCloseData {...props} />
        </div>
    );
};
