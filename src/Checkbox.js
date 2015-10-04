import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Checkbox extends React.Component {
    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        id: PropTypes.string,
        label: PropTypes.string,
        ripple: PropTypes.bool,
        onChange: PropTypes.func.isRequired
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

export default mdlUpgrade(Checkbox);
