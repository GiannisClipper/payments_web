import React from 'react';

import { 
    GroupInputs as CoreGroupInputs,
    GroupItems as CoreGroupItems,
} from '../../core/components/groups.jsx';

import { GroupInputId } from '../../core/components/inputs.jsx';

import {
    GroupInputCode,
    GroupInputName,
    GroupInputIsIncoming,
    GroupInputFund,
} from './inputs.jsx';

import { MappedButtonRequestFund,
         MappedRelatedFundList,
} from '../containers.js';

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { NAMESPACE, LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const RelatedFundList = ({items}) => {

    const fields = ['code', 'name'];

    let key = 0;

    return (
        <div className='related_list'>
            <ul className='items'>
                {items.order.map(id => (
                    <li key={id}>
                        {fields.map(field => 
                            (<span key={key++}>{items.data[id][field]}</span>)
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const GroupInputs = ({message, allowRelatedFundList}) => {

    const inputs = [
        GroupInputId,
        GroupInputCode,
        GroupInputName,
        GroupInputIsIncoming,
        GroupInputFund,
        (allowRelatedFundList?
        MappedRelatedFundList:
        MappedButtonRequestFund),
    ];

    return (
        <CoreGroupInputs 
            namespace={NAMESPACE}
            inputs={inputs}
            message={message} 
        />
    )
}

export const GroupItems = ({items}) => {

    const labels = [
        CORE_LABELS.INPUT_ID,
        LABELS.INPUT_CODE,
        LABELS.INPUT_NAME,
        LABELS.INPUT_IS_INCOMING,
        LABELS.INPUT_FUND,
    ];

    const fields = [
        'id',
        'code',
        'name',
        'is_incoming',
        {fund: [
            'id',
            'name'
        ]},
    ];

    return (
        <CoreGroupItems
            namespace={NAMESPACE}
            labels={labels} 
            fields={fields} 
            items={items} 
        />
    )
}
