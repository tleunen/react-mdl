import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Button extends React.Component {
    static propTypes = {
        accent: PropTypes.bool,
        className: PropTypes.string,
        colored: PropTypes.bool,
        primary: PropTypes.bool,
        raised: PropTypes.bool,
        ripple: PropTypes.bool
    }

    static defaultProps = {
        ripple: true
    }

    render() {
        var { accent, className, colored,
            primary, raised, ripple, ...otherProps } = this.props;

        var buttonClasses = classNames('mdl-button mdl-js-button', {
            'mdl-js-ripple-effect': ripple,
            'mdl-button--raised': raised,
            'mdl-button--colored': colored,
            'mdl-button--primary': primary,
            'mdl-button--accent': accent
        }, className);

        return (
            <button className={buttonClasses} {...otherProps}>
                {this.props.children}
            </button>
        );
    }
}

export default mdlUpgrade(Button);
