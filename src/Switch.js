import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Switch extends React.Component {
    constructor(props) {
        super(props);

        this._handleChange = this._handleChange.bind(this);
    }

    componentDidMount(){
        componentHandler.upgradeElement(React.findDOMNode(this));
    }

    componentWillUnmount(){
        componentHandler.downgradeElements(React.findDOMNode(this));
    }

    _handleChange(event) {
        this.props.onChange(event.target.checked);
    }

    render() {
        var { checked, className, disabled, id, ripple } = this.props;
        var inputId = 'switch-' + id;

        // enable ripple by default
        ripple = ripple !== false;

        var classes = classNames('mdl-switch mdl-js-switch', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes} htmlFor={inputId}>
                <input
                    type="checkbox"
                    id={inputId}
                    className="mdl-switch__input"
                    checked={checked}
                    disabled={disabled}
                    onChange={this._handleChange}
                />
                <span className="mdl-switch__label">{this.props.children}</span>
            </label>
        );
    }
}

Switch.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    ripple: PropTypes.bool
};

export default Switch;
