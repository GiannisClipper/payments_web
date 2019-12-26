import React from 'react';

import { initialData } from './reducers.js';

import { 
    DvFormMenu,
    DvItemMenu,
    DvCreateMenu,
    DvRetrieveMenu,
    DvUpdateMenu,
    DvDeleteMenu,
} from '../core/components.jsx';

// --- --- --- --- --- --- --- --- ---

const InCode = ({uiux, data, actions}) => {
    return (
        <input
            value={data.code}
            onChange={event => actions.onChangeCode(data.id, event.target.value)}
            disabled={!uiux.allowEdit}
        />
    );
};

const InName = ({uiux, data, actions}) => {
    return (
        <input 
            value={data.name}
            onChange={event => actions.onChangeName(data.id, event.target.value)}
            disabled={!uiux.allowEdit}
        />
    );
};

const DvFundData = props => {
    return (
        <div>
            <InCode {...props}/>
            <InName {...props}/>
        </div>
    );
};

const DvFundsList = props => {
    const items = props.items; 
    const ids = Object.keys(items);

    return (
        <div>
            <div>
                <span>ΚΩΔΙΚΟΣ</span>
                <span>ΟΝΟΜΑΣΙΑ</span>
            </div>
            <ul>
            {ids.map(id => (
            <li>
                <span>{items[id].code}</span>
                <span>{items[id].name}</span>
                <DvItemMenu {...props} />
            </li>
            ))}
            </ul>
        </div>
    );
};

export const FundsForm = props => {
    let uiux = props.uiux;
    
    return (uiux.mode === 'CREATE')?(
                <div>
                <DvFundData {...props}/>
                <DvCreateMenu {...props}/>
                </div>

            ):(uiux.mode === 'RETRIEVE')?(
                <div>
                <DvFundData {...props}/>
                <DvRetrieveMenu {...props}/>
                </div>

            ):(uiux.mode === 'UPDATE')?(
                <div>
                <DvFundData {...props}/>
                <DvUpdateMenu {...props}/>
                </div>

            ):(uiux.mode === 'DELETE')?(
                <div>
                <DvFundData {...props}/>
                <DvDeleteMenu {...props}/>
                </div>

            ):(
                <div>
                <DvFundsList {...props} />
                <DvFormMenu {...props} />
                </div>
            );
};
