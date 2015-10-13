import React, { PropTypes } from 'react';
import classNames from 'classnames';
import MDL from './mdlbase';

class Button extends MDL.UpgradedComponent {
    static propTypes = {
        accent: PropTypes.bool,
        className: PropTypes.string,
        colored: PropTypes.bool,
        component: PropTypes.any,
        href: PropTypes.string,
        primary: PropTypes.bool,
        raised: PropTypes.bool,
        ripple: PropTypes.bool
    }

    static defaultProps = {
        ripple: true
    }

    render() {
        var { accent, className, colored,
            primary, raised, ripple, component, href,
            children, ...otherProps } = this.props;

        var buttonClasses = classNames('mdl-button mdl-js-button', {
            'mdl-js-ripple-effect': ripple,
            'mdl-button--raised': raised,
            'mdl-button--colored': colored,
            'mdl-button--primary': primary,
            'mdl-button--accent': accent
        }, className);

        component = component || (href ? 'a' : 'button');

        return React.createElement(component, {
            className: buttonClasses,
            href,
            ...otherProps
        }, children);
    }
}

export default Button;
