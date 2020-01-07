import React from 'react';

import { ButtonSelect } from '../../core/components/buttons.jsx';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const ButtonSelectRetrieveFund = ({onSelect}) => {
    return (
        <ButtonSelect
            name = 'fund'
            label = {LABELS.BUTTON_SELECT_RETRIEVE_FUND}
            onSelect = {onSelect}
        />
    )
}
