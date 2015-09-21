import React, { PropTypes } from 'react';
import mdlUpgrade from './utils/mdlUpgrade';

class Checkbox extends React.Component {
    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        id: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func.isRequired
    }

    _handleChange = (event) => {
        this.props.onChange(event.target.checked);
    }

    render() {
        var { checked, disabled, id, label } = this.props;

        var inputId = 'checkbox-' + (label || id).replace(/\s+/g, '');

        return (
            <label className="mdl-checkbox mdl-js-checkbox" htmlFor={id}>
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
