import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

const propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onChange: PropTypes.func,
    ripple: PropTypes.bool
};

class Checkbox extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.disabled !== prevProps.disabled) {
            const fnName = this.props.disabled ? 'disable' : 'enable';
            findDOMNode(this).MaterialCheckbox[fnName]();
        }
        if (this.props.checked !== prevProps.checked) {
            const fnName = this.props.checked ? 'check' : 'uncheck';
            findDOMNode(this).MaterialCheckbox[fnName]();
        }
    }

    labelElement() {
        const { label } = this.props;

        if (!label) {
            return null;
        } else if (typeof label === 'string') {
            return <span className="mdl-checkbox__label">{label}</span>;
        } else if (typeof label === 'object') {
            return label;
        }

        return null;
    }

    render() {
        const { className, label, ripple, ...inputProps } = this.props;

        const classes = classNames('mdl-checkbox mdl-js-checkbox', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes}>
                <input
                    type="checkbox"
                    className="mdl-checkbox__input"
                    { ...inputProps }
                />
                {this.labelElement()}
            </label>
        );
    }
}

Checkbox.propTypes = propTypes;

export default mdlUpgrade(Checkbox);
