import React from 'react';
import RadioGroup from '../../../lib/RadioGroup';

import Example from '../Example';

export default class RadioGroupExample extends React.Component {
    constructor( ...args ) {
        super( ...args );
    }
    state = {
        value: 'opt1'
    };
    _changed = ( e ) => this.setState( { value: e.target.value } );
    render() {
        const { value } = this.state;
        const { children, ...props } = this.props;
        return (
            <Example>
                <RadioGroup value={ value } onChange={ this._changed } { ...props } />
            </Example>
        );
    }
}
