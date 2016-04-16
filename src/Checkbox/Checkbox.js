import React, { PropTypes } from 'react';
import classNames from 'classnames';
import addRipple from '../Ripple';

const propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onMouseUp: PropTypes.func // from Ripple
};

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseUp() {
        window.setTimeout(() => {
            this.refs.input.blur();
        }, 0);
    }

    render() {
        const { children, className, checked,
            disabled, label, onChange, onMouseUp, ...otherProps } = this.props;

        const classes = classNames('mdl-checkbox is-upgraded', {
            'is-focused': false,
            'is-disabled': disabled,
            'is-checked': checked
        }, className);

        const handleMouseUp = (e) => {
            this.handleMouseUp(e);
            onMouseUp(e); // from Ripple
        };

        return (
            <label className={classes} onMouseUp={handleMouseUp} {...otherProps}>
                <input
                    ref="input"
                    type="checkbox"
                    className="mdl-checkbox__input"
                    disabled={disabled}
                    checked={checked}
                    onChange={onChange}
                />
                {label && <span className="mdl-checkbox__label">{label}</span>}
                <span className="mdl-checkbox__focus-helper" />
                <span className="mdl-checkbox__box-outline">
                    <span className="mdl-checkbox__tick-outline" />
                </span>
                {children}
            </label>
        );
    }
}

Checkbox.propTypes = propTypes;

export default addRipple(Checkbox, { prefix: 'mdl-checkbox', center: true });
