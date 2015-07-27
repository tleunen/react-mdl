import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Radio extends React.Component {
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
        this.props.onChange(event.target.value);
    }

    render() {
        var { checked, className, disabled, name, ripple, value } = this.props;
        var inputId = 'radio-' + name.replace(/\s+/g, '') + '-' + value.replace(/\s+/g, '');

        // enable ripple by default
        ripple = ripple !== false;

        var classes = classNames('mdl-radio mdl-js-radio', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes} htmlFor={inputId}>
                <input
                    type="radio"
                    id={inputId}
                    className="mdl-radio__button"
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                    onChange={this._handleChange}
                />
                <span className="mdl-radio__label">{this.props.children}</span>
            </label>
        );
    }
}

Radio.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    ripple: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default Radio;
