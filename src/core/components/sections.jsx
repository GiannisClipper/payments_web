import React from 'react';

import { GroupItemButtons } from '../../core/components/groups.jsx';

// --- --- --- --- --- --- --- --- ---

export class SectionInputs extends React.Component {

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

export class SectionList extends React.Component {

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

export const RelatedList = ({items, onSelect}) => {

    let key = 0;

    return (
        <div className='related_list'>
            <ul className='items'>
                {items.order.map(id => (
                    <li key={id} onClick={() => onSelect(id)}>
                        {items.reprKeys.map(k => 
                            (<span key={key++}>{items.data[id][k]}</span>)
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}
