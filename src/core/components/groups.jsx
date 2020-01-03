import React from 'react';

import { DivItemMenu } from './menus.jsx';

export class DivInputs extends React.Component {

    render() {
        const namespace = this.props.namespace;
        const MappedInputs = this.props.MappedInputs;
        const message = this.props.message;
        let key = 0;

        return (
            <div className='data'>
                <span className='message'>{message?message:''}</span>

                {MappedInputs.map(MappedInput => (
                    <li key={key++}>
                        <span><MappedInput {...{namespace}} /></span>
                    </li>
                ))}
            </div>
        )
    }
}

export class DivItems extends React.Component {

    render() {
        const namespace = this.props.namespace;
        const labels = this.props.labels;
        const fields = this.props.fields;
        const items = this.props.items;
        let key = 0;

        return (
            <div className='data'>
                <div className='labels'>
                    {labels.map(label => (
                        <li key={key++}>
                            <span>{label}</span>
                        </li>
                    ))}
                </div>
                <ul className='items'>
                    {items.order.map(id => (
                        <li key={id}>
                            {fields.map(field => (<span key={key++}>{items.data[id][field]}</span>))}
                            <DivItemMenu {...{namespace, id}} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
