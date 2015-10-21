import React, { PropTypes } from 'react';

class Badge extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string
        ]),
        text: PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ])
    };

    render() {
        var { children, text } = this.props;

        // No badge if no children
        if(!React.Children.count(children)) return null;

        var element;
        if(typeof children === 'string') {
            element = <span>{children}</span>;
        }
        else {
            element = React.Children.only(children);
        }

        // No text -> No need of badge
        if(text === null || typeof text === 'undefined') return element;

        return React.cloneElement(element, {
            className: 'mdl-badge',
            'data-badge': text
        });
    }
}

export default Badge;
