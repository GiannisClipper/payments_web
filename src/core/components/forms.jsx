import React from 'react';

import { DivRetrieveMenu } from './menus.jsx';

export class FormInMode extends React.Component {

    render() {
        const name = this.props.name?this.props.name.toLowerCase():'';
        const mode = this.props.mode?this.props.mode.toLowerCase():'';
        const title = this.props.title;
        const MappedDivModeData = this.props.MappedDivModeData;
        const DivModeMenu = this.props.DivModeMenu;
        const namespace = this.props.namespace;
        const hostArgs = this.props.hostArgs;

        return (
            <div className={`form form_${name} ${mode}`}>
                <div className='title'>{title}</div>
                <MappedDivModeData namespace={namespace} />
                <DivModeMenu namespace={namespace} hostArgs={hostArgs} />
            </div>
        )
    }
}

export class RelatedForm extends React.Component {

    render() {
        const name = this.props.name?this.props.name.toLowerCase():'';
        const title = this.props.title;
        const MappedDivInputs = this.props.MappedDivInputs;
        const MappedDivItems = this.props.MappedDivItems;
        const namespace = this.props.namespace;
        const hostArgs = this.props.hostArgs;

        return (
            <div className={`popup popup_${name}`}>
                <div className='title'>{title}</div>
                <MappedDivInputs namespace={namespace} />
                <DivRetrieveMenu namespace={namespace} hostArgs={hostArgs} />
                <MappedDivItems namespace={namespace} />
            </div>
        )
        
    }
}
