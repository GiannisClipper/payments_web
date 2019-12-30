import React from 'react';

import { useHistory } from "react-router-dom";

// --- --- --- --- --- --- --- --- ---

export const ButtonSelectCreate = ({onSelect}) => {
    return (
        <button
            onClick={() => onSelect()}
        >Νέα εγγραφή</button>
    );
};

export const ButtonSelectRetrieve = ({onSelect}) => {
    return (
        <button
            onClick={() => onSelect()}
        >Αναζήτηση</button>
    );
};

export const ButtonSelectUpdate = ({onSelect}) => {
    return (
        <button
            onClick={() => onSelect()}
        >Τροποποίηση</button>
    );
};

export const ButtonSelectDelete = ({onSelect}) => {
    return (
        <button
            onClick={() => onSelect()}
        >Διαγραφή</button>
    );
};

// --- --- --- --- --- --- --- --- ---

export const ButtonRequestCreate = ({auth, data, allowRequest, onRequest}) => {
    return (
        <button
            onClick={() => onRequest(auth, data)}
            disabled={!allowRequest}
        >Αποθήκευση</button>
    );
};

export const ButtonRequestRetrieve = ({auth, data, onRequest}) => {
    return (
        <button
            onClick={() => onRequest(auth, data)}
        >Αναζήτηση</button>
    );
};

export const ButtonRequestUpdate = ({auth, data, allowRequest, onRequest}) => {
    return (
        <button
            onClick={() => onRequest(auth, data)}
            disabled={!allowRequest}
        >Αποθήκευση</button>
    );
};

export const ButtonRequestDelete = ({auth, data, onRequest}) => {
    return (
        <button
            onClick={() => onRequest(auth, data)}
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
