import React, { PropTypes } from 'react';

class Badge extends React.Component {
    render() {
        var { children } = this.props;
        var element;
        if(typeof children === 'string') {
            element = <span>{children}</span>;
        }
        else {
            element = React.Children.only(this.props.children);
        }

        return React.cloneElement(element, {
            className: 'mdl-badge',
            'data-badge': this.props.text
        });
    }
}

Badge.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    text: PropTypes.string.isRequired
};

export default Badge;
