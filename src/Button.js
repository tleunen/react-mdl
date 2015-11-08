import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Button extends React.Component {
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

export default mdlUpgrade(Button);
