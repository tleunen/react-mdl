import React from 'react';
import getTag from './getTag';

export default function CloseTag( props ) {
    const child = props.el;
    const tag = getTag( child );
    const childCount = React.Children.count( child.props.children );
    if ( childCount === 0 ) {
        return <span />;
    }

    return (
        <code>
        { `</` }{ tag }{ `>` }
        </code>
    );
}
CloseTag.propTypes = {
    el: React.PropTypes.any,
};
