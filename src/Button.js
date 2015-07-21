import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this._handleBlur = this._handleBlur.bind(this);
    }

    _handleBlur() {
        React.findDOMNode(this.refs.button).blur();
    }

    render() {
        var buttonClasses = classNames('mdl-button', {
            'mdl-button--raised': this.props.raised,
            'mdl-button--colored': this.props.colored,
            'mdl-button--primary': this.props.primary,
            'mdl-button--accent': this.props.accent,
            'mdl-button--icon': !!this.props.icon
        }, this.props.className);

        return (
            <button
                ref="button"
                className={buttonClasses}
                disabled={this.props.disabled}
                onMouseUp={this._handleBlur}
                onMouseLeave={this._handleBlur}
            >
                {this.props.icon ? (
                    <i className="material-icons">{this.props.icon}</i>
                ) : this.props.label }
            </button>
        );
    }
}

Button.propTypes = {
    accent: PropTypes.bool,
    className: PropTypes.string,
    colored: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    label: PropTypes.string,
    primary: PropTypes.bool,
    raised: PropTypes.bool
};

export default Button;
