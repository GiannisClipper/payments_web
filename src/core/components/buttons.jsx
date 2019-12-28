import React from 'react';

import { useHistory } from "react-router-dom";

// --- --- --- --- --- --- --- --- ---

export const ButtonSelectCreate = ({onSelectCreate}) => {
    return (
        <button
            onClick={() => onSelectCreate()}
        >Νέα εγγραφή</button>
    );
};

export const ButtonSelectRetrieve = ({onSelectRetrieve}) => {
    return (
        <button
            onClick={() => onSelectRetrieve()}
        >Αναζήτηση</button>
    );
};

export const ButtonSelectUpdate = ({id, onSelectUpdate}) => {
    return (
        <button
            onClick={() => onSelectUpdate(id)}
        >Τροποποίηση</button>
    );
};

export const ButtonSelectDelete = ({id, onSelectDelete}) => {
    return (
        <button
            onClick={() => onSelectDelete(id)}
        >Διαγραφή</button>
    );
};

// --- --- --- --- --- --- --- --- ---

export const ButtonVerifyCreate = ({auth, data, allowSave, onVerifyCreate}) => {
    return (
        <button
            onClick={() => onVerifyCreate(auth, data)}
            disabled={!allowSave}
        >Αποθήκευση</button>
    );
};

export const ButtonVerifyRetrieve = ({auth, data, onVerifyRetrieve}) => {
    return (
        <button
            onClick={() => onVerifyRetrieve(auth, data)}
        >Αναζήτηση</button>
    );
};

export const ButtonVerifyUpdate = ({auth, data, allowSave, onVerifyUpdate}) => {
    return (
        <button
            onClick={() => onVerifyUpdate(auth, data)}
            disabled={!allowSave}
        >Αποθήκευση</button>
    );
};

export const ButtonVerifyDelete = ({auth, data, onVerifyDelete}) => {
    return (
        <button
            onClick={() => onVerifyDelete(auth, data)}
        >Επιβεβαίωση</button>
    );
};

// --- --- --- --- --- --- --- --- ---

export const ButtonCloseData = ({onCloseData}) => {
    return (
        <button
            onClick={() => onCloseData()}
        >Κλείσιμο</button>
    );
};

export const ButtonCloseForm = ({onCloseForm, onGoHome}) => {
    let history = useHistory();

    return (
        <button
            onClick={() => {
                onCloseForm();
                onGoHome(history);
            }}
        >Κλείσιμο</button>
    );
};

export const ButtonGoHome = ({onGoHome}) => {
    let history = useHistory();

    return (
        <button
            onClick={() => onGoHome(history)}
        >Κλείσιμο</button>
    );
};
