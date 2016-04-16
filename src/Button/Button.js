import React, { PropTypes } from 'react';
import classNames from 'classnames';
import addRipple from '../Ripple';

const propTypes = {
    accent: PropTypes.bool,
    className: PropTypes.string,
    colored: PropTypes.bool,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.func
    ]),
    href: PropTypes.string,
    primary: PropTypes.bool,
    raised: PropTypes.bool
};

const Button = (props) => {
    const { accent, className, colored,
        primary, raised, component, href,
        children, ...otherProps } = props;
    const buttonClasses = classNames('mdl-button', {
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
};


Button.propTypes = propTypes;

export default addRipple(Button, { prefix: 'mdl-button' });
