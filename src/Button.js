import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

var Button = (props) => {
    var { accent, className, colored,
        primary, raised, ripple, component, href,
        children, ...otherProps } = props;

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
};

Button.propTypes = {
    accent: PropTypes.bool,
    className: PropTypes.string,
    colored: PropTypes.bool,
    component: PropTypes.any,
    href: PropTypes.string,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    ripple: PropTypes.bool
};

export default mdlUpgrade(Button);
