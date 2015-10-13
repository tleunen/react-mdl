import React, { PropTypes } from 'react';
import classNames from 'classnames';
import MDL from './mdlbase';

class Checkbox extends MDL.UpgradedComponent {
    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        id: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        ripple: PropTypes.bool
    }

    static defaultProps = {
        ripple: true
    }

    _handleChange = (event) => {
        this.props.onChange(event.target.checked);
    }

    render() {
        var { checked, disabled, id, label, ripple } = this.props;

        var inputId = 'checkbox-' + (label || id).replace(/\s+/g, '');
        var classes = classNames('mdl-checkbox mdl-js-checkbox', {
            'mdl-js-ripple-effect': ripple
        });

        return (
            <label className={classes} htmlFor={id}>
                <input
                    type="checkbox"
                    id={inputId}
                    className="mdl-checkbox__input"
                    checked={checked}
                    disabled={disabled}
                    onChange={this._handleChange}
                />
                {this.props.label ? <span className="mdl-checkbox__label">{label}</span> : null}
            </label>
        );
    }
}

export default Checkbox;
