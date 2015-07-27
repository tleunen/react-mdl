import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Button extends React.Component {
    componentDidMount(){
        componentHandler.upgradeElement(React.findDOMNode(this));
    }

    componentWillUnmount(){
        componentHandler.downgradeElements(React.findDOMNode(this));
    }

    render() {
        var { accent, className, colored,
            primary, raised, ripple, ...otherProps } = this.props;

        // enable ripple by default
        ripple = ripple !== false;

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

Button.propTypes = {
    accent: PropTypes.bool,
    className: PropTypes.string,
    colored: PropTypes.bool,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    ripple: PropTypes.bool
};

export default Button;
