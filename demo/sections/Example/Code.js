import React from 'react';
import OpenTag from './OpenTag';
import CloseTag from './CloseTag';

export default function Code( props ) {
    const { el, ...other } = props;

    if ( !React.isValidElement( el ) ) {
        return <code>{ el }</code>;
    }

    const { children } = el.props;
    return (
    <div { ...other }>
        <OpenTag el={ el } />
        { React.Children.map( children, ( child, i ) =>
            <div style={{ marginLeft: '1em' }} key={ i }>
                <Code el={ child } />
            </div>
        ) }
        <CloseTag el={ el } />
    </div>
    );
}
