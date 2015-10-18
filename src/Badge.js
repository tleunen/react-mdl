import React, { PropTypes } from 'react';

var Badge = (props) => {
    var { children, text } = props;

    // No badge if no children
    if(!React.Children.count(children)) return null;

    // No text -> No need of badge
    if(text === null || typeof text === 'undefined') return children;

    var element;
    if(typeof children === 'string') {
        element = <span>{children}</span>;
    }
    else {
        element = React.Children.only(children);
    }

    return React.cloneElement(element, {
        className: 'mdl-badge',
        'data-badge': text
    });
};

Badge.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]),
    text: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ])
};

export default Badge;
