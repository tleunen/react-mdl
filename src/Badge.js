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

class Badge extends React.Component {
    render() {
        const { children, className, text, overlap, noBackground } = this.props;

        // No badge if no children
        if (!React.Children.count(children)) return null;

        const element = typeof children === 'string'
            ? <span>{children}</span>
            : React.Children.only(children);

        // No text -> No need of badge
        if (text === null || typeof text === 'undefined') return element;

        return React.cloneElement(element, {
            className: classNames(className, element.props.className, 'mdl-badge', {
                'mdl-badge--overlap': !!overlap,
                'mdl-badge--no-background': !!noBackground
            }),
            'data-badge': text
        });
    }
}

Badge.propTypes = propTypes;

export default Badge;
