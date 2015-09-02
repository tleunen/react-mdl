import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Switch extends React.Component {
    static propTypes = {
        checked: PropTypes.bool,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        id: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        ripple: PropTypes.bool
    }

    _handleChange = (event) => {
        this.props.onChange(event);
    }

    render() {
        var { checked, className, disabled, id, ripple } = this.props;

        // enable ripple by default
        ripple = ripple !== false;

        var classes = classNames('mdl-switch mdl-js-switch', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes} htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
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

export default mdlUpgrade(Switch);
