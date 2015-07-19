import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(event) {
        this.props.onChange(event.target.checked);
    }

    render() {
        var id = 'checkbox-' + (this.props.label || this.props.id).replace(/\s+/g, '');

        var tickContainer = <span className="mdl-checkbox__focus-helper" />;
        var boxOutline = (
            <span className="mdl-checkbox__box-outline">
                <span className="mdl-checkbox__tick-outline" />
            </span>
        );

        var checked = !!this.props.checked;
        var disabled = !!this.props.disabled;

        var elementClasses = classNames('mdl-checkbox', 'is-upgraded', {
            'is-disabled': disabled,
            'is-checked': checked
        });

        return (
            <label className={elementClasses} htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
                    className='mdl-checkbox__input'
                    checked={checked}
                    disabled={disabled}
                    onChange={this._handleChange}
                />
                {this.props.label ? <span className="mdl-checkbox__label">{this.props.label}</span> : null}
                {tickContainer}
                {boxOutline}
            </label>
        );
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;
