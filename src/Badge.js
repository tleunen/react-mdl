import React, { PropTypes } from 'react';

class Badge extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string
        ]),
        text: PropTypes.string.isRequired
    }

    render() {
        var { children } = this.props;

        // No badge if no children
        if(!React.Children.count(children)) return null;

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

export default Badge;
