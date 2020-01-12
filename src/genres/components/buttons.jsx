import React from 'react';

import { ButtonRequest } from '../../core/components/buttons.jsx';

// --- --- --- --- --- --- --- --- ---

export const ButtonRequestFund = ({allowRequest, auth, data, onRequest, isLoading}) => (

    <ButtonRequest
        name = 'fund'
        label = '...'
        allowRequest = {allowRequest}
        onRequest = {onRequest}
        auth = {auth}
        data = {data}
        isLoading = {isLoading}
    />
)
