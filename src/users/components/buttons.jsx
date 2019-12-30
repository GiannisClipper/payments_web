import React from 'react';

export const ButtonSignup = ({auth, data, allowRequest, isLoading, onRequest}) => {
    return (
        <button
            onClick={() => onRequest(auth, data)}
            disabled={!allowRequest}
        >
            {(isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
            Υποβολή
        </button>
    );
};

export const ButtonSignin = ({auth, data, allowRequest, isLoading, onRequest}) => {
    return (
        <button
            onClick={() => onRequest(auth, data)}
            disabled={!allowRequest}
        >
            {(isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
            Είσοδος
        </button>
    );
};