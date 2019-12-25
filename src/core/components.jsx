import { useHistory } from "react-router-dom";

import React from 'react';

// --- --- --- --- --- --- --- --- ---

export const BtSelectCreate = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onSelectCreate()}
            disabled={!item.uiux.enableSave}
        >Νέα εγγραφή</button>
    );
};

export const BtSelectRetrieve = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onSelectRetrieve()}
        >Αναζήτηση</button>
    );
};

export const BtSelectUpdate = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onSelectUpdate(item.data.id)}
        >Τροποποίηση</button>
    );
};

export const BtSelectDelete = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onSelectDelete(item.data.id)}
        >Διαγραφή</button>
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

export const BtVerifyCreate = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyCreate(item.data.id)}
            disabled={!item.uiux.enableSave}
        >Αποθήκευση</button>
    );
};

export const BtVerifyUpdate = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyUpdate(item.data.id)}
            disabled={!item.uiux.enableSave}
        >Αποθήκευση</button>
    );
};

export const BtVerifyRetrieve = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyRetrieve(item.data.id)}
        >Αναζήτηση</button>
    );
};

export const BtVerifyDelete = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyDelete(item.data.id)}
        >Επιβεβαίωση</button>
    );
};

export const BtClose = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onClose(item.data.id)}
        >Κλείσιμο</button>
    );
};

export const DvCreateMenu = props => {
    return (
        <div>
            <BtVerifyCreate {...props} />
            <BtClose {...props} />
        </div>
    );
};

export const DvUpdateMenu = props => {
    return (
        <div>
            <BtVerifyUpdate {...props} />
            <BtClose {...props} />
        </div>
    );
};

export const DvRetrieveMenu = props => {
    return (
        <div>
            <BtVerifyRetrieve {...props} />
            <BtClose {...props} />
        </div>
    );
};

export const DvDeleteMenu = props => {
    return (
        <div>
            <BtVerifyDelete {...props} />
            <BtClose {...props} />
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

export const BtCloseItem = (item, actions) => {
    return (
        <button
            onClick={() => actions.onCloseItem(item)}
        >Κλείσιμο</button>
    );
};

export const BtCloseForm = ({item, initialData, actions}) => {
    let history = useHistory();

    return (
        <button
            onClick={() => {
                actions.onCloseForm(item.data.id, initialData);
                actions.onGoHome(history);
            }}
        >Κλείσιμο</button>
    );
};

export const BtGoHome = (actions) => {
    let history = useHistory();

    return (
        <button
            onClick={() => actions.onGoHome(history)}
        >Κλείσιμο</button>
    );
};
