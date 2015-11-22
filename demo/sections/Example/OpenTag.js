import React from 'react';
import getTag from './getTag';
import Props from './Props';

export default function OpenTag( props ) {
    const child = props.el;
    const tag = getTag( child );
    const childCount = React.Children.count( child.props.children );
    return (
        <code>
            { `<` }{ tag }
            <Props el={ child } />
            { childCount > 0 ? '>' : ' />' }
        </code>
    );
}
OpenTag.propTypes = {
    el: React.PropTypes.any,
};
