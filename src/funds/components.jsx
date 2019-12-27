import React from 'react';

import { LABELS } from './constants.js';

import { 
    DivFormMenu,
    DivItemMenu,
    DivCreateMenu,
    DivRetrieveMenu,
    DivUpdateMenu,
    DivDeleteMenu,
} from '../core/components.jsx';

// --- --- --- --- --- --- --- --- ---

const InputId = ({data}) => {
    return (
        <div className='field'>
            <span className='label'>{LABELS.id}</span>
            <input
                value={data.id}
                disabled={true}
            />
        </div>
    );
};

const InputCode = ({uiux, data, actions}) => {
    return (
        <div className='field'>
            <span className='label'>{LABELS.code}</span>
            <input
                value={data.code}
                onChange={event => actions.onChangeCode(uiux, data.id, event.target.value)}
                disabled={!uiux.allowEdit}
            />
            <span className='message'></span>
        </div>
    );
};

const InputName = ({uiux, data, actions}) => {
    return (
        <div className='field'>
            <span className='label'>{LABELS.name}</span>
            <input 
                value={data.name}
                onChange={event => actions.onChangeName(uiux, data.id, event.target.value)}
                disabled={!uiux.allowEdit}
            />
            <span className='message'></span>
        </div>
    );
};

const DivEdit = props => {
    return (
        <div className='edit'>
            <InputId {...props}/>
            <InputCode {...props}/>
            <InputName {...props}/>
        </div>
    );
};

const DivList = props => {
    const items = props.items; 
    const ids = Object.keys(items);

    return (
        <div className='list'>
            <div className='labels'>
                <span>{LABELS.code}</span>
                <span>{LABELS.name}</span>
            </div>
            <ul className='data'>
                {ids.map(id => (
                <li>
                    <span>{items[id].code}</span>
                    <span>{items[id].name}</span>
                    <DivItemMenu {...props} />
                </li>
                ))}
            </ul>
        </div>
    );
};

export const FundsForm = props => {
    let uiux = props.uiux;
    
    return (uiux.mode === 'CREATE')?(
        <div className='form'>
            <DivEdit {...props}/>
            <DivCreateMenu {...props}/>
        </div>

    ):(uiux.mode === 'RETRIEVE')?(
        <div className='form'>
            <DivEdit {...props}/>
            <DivRetrieveMenu {...props}/>
        </div>

    ):(uiux.mode === 'UPDATE')?(
        <div className='form'>
            <DivEdit {...props}/>
            <DivUpdateMenu {...props}/>
        </div>

    ):(uiux.mode === 'DELETE')?(
        <div className='form'>
            <DivEdit {...props}/>
            <DivDeleteMenu {...props}/>
        </div>

    ):(
        <div className='form'>
            <DivList {...props} />
            <DivFormMenu {...props} />
        </div>
    );
};
