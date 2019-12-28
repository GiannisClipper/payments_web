import React from 'react';

export const ButtonSignup = ({auth, data, allowSave, isLoading, onVerifyCreate}) => {
    return (
        <button
            onClick={() => onVerifyCreate(auth, data)}
            disabled={!allowSave}
        >
            {(isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
            Υποβολή
        </button>
    );
};

export const ButtonSignin = ({auth, data, allowSave, isLoading, onVerifyRetrieve}) => {
    return (
        <button
            onClick={() => onVerifyRetrieve(auth, data)}
            disabled={!allowSave}
        >
            {(isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
            Είσοδος
        </button>
    );
};