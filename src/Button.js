import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

const propTypes = {
    accent: PropTypes.bool,
    className: PropTypes.string,
    colored: PropTypes.bool,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.elementType,
        PropTypes.func
    ]),
    href: PropTypes.string,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    ripple: PropTypes.bool
};

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
    render() {
        const { accent, className, colored,
            primary, raised, ripple, component, href,
            children, ...otherProps } = this.props;

        const buttonClasses = classNames('mdl-button mdl-js-button', {
            'mdl-js-ripple-effect': ripple,
            'mdl-button--raised': raised,
            'mdl-button--colored': colored,
            'mdl-button--primary': primary,
            'mdl-button--accent': accent
        }, className);

        return React.createElement(component || (href ? 'a' : 'button'), {
            className: buttonClasses,
            href,
            ...otherProps
        }, children);
    }
}

Button.propTypes = propTypes;

export default mdlUpgrade(Button);
