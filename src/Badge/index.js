import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]),
    className: PropTypes.string,
    text: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    overlap: PropTypes.bool,
    noBackground: PropTypes.bool
};

const Badge = props => {
    const { children, className, text, overlap, noBackground, ...rest } = props;

    // No badge if no children
    // TODO: In React 15, we can return null instead
    if (!React.Children.count(children)) return <noscript />;

    const element = typeof children === 'string'
        ? <span>{children}</span>
        : React.Children.only(children);

    // No text -> No need of badge
    if (text === null || typeof text === 'undefined') return element;

    return React.cloneElement(element, {
        ...rest,
        className: classNames(className, element.props.className, 'mdl-badge', {
            'mdl-badge--overlap': !!overlap,
            'mdl-badge--no-background': !!noBackground
        }),
        'data-badge': text
    });
};

Badge.propTypes = propTypes;

export default Badge;
