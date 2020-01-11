import React from 'react';

import {
    MappedButtonSelectCreate,
    MappedButtonSelectRetrieve,
    MappedButtonSelectUpdate,
    MappedButtonSelectDelete,

    MappedButtonRequestCreate,
    MappedButtonRequestRetrieve,
    MappedButtonRequestUpdate,
    MappedButtonRequestDelete,

    MappedButtonCloseData,
    MappedButtonCloseForm,

} from '../containers.js';

export class GroupInputs extends React.Component {

    render() {
        const namespace = this.props.namespace;
        const inputs = this.props.inputs;
        const message = this.props.message;
        let key = 0;

        return (
            <div className='data'>
                <span className='message'>{message?message:''}</span>

                {inputs.map(AnInput => (
                    <li key={key++}>
                        <span><AnInput {...{namespace}} /></span>
                    </li>
                ))}
            </div>
        )
    }
}

export class GroupItems extends React.Component {

    render() {
        const namespace = this.props.namespace;
        const labels = this.props.labels;
        const fields = this.props.fields;
        const items = this.props.items;
        let key = 0;

        return (
            <div className='data'>
                <span className='labels'>
                    {labels.map(label => (
                        <span key={key++}>{label}</span>
                    ))}
                </span>
                <ul className='items'>
                    {items.order.map(id => (
                        <li key={id}>
                            {fields.map(field => 
                                !items.data[id][field]?
                                    (<span key={key++}></span>)
                                :typeof field !== 'object'?
                                    (<span key={key++}>{items.data[id][field]}</span>)
                                :
                                    field[Object.keys(field)[0]].map(subField =>
                                        (<span key={key++}>{items.data[id][field][subField]}</span>))
                            )}
                            <GroupItemButtons {...{namespace, id}} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

// --- --- --- --- --- --- --- --- ---
// Group buttons
// --- --- --- --- --- --- --- --- ---

export const GroupFormButtons = props => {
    return (
        <div>
            <MappedButtonSelectCreate {...props} />
            <MappedButtonSelectRetrieve {...props} />
            <MappedButtonCloseForm {...props} />
        </div>
    )
}

export const GroupItemButtons = props => {
    return (
        <div>
            <MappedButtonSelectUpdate {...props} />
            <MappedButtonSelectDelete {...props} />
        </div>
    )
}

// --- --- --- --- --- --- --- --- ---

export const GroupCreateButtons = props => {
    return (
        <div>
            <MappedButtonRequestCreate {...props} />
            <MappedButtonCloseData {...props} />
        </div>
    )
}

export const GroupUpdateButtons = props => {
    return (
        <div>
            <MappedButtonRequestUpdate {...props} />
            <MappedButtonCloseData {...props} />
        </div>
    )
}

export const GroupRetrieveButtons = props => {
    return (
        <div>
            <MappedButtonRequestRetrieve {...props} />
            <MappedButtonCloseData {...props} />
        </div>
    )
}

export const GroupDeleteButtons = props => {
    return (
        <div>
            <MappedButtonRequestDelete {...props} />
            <MappedButtonCloseData {...props} />
        </div>
    )
}
