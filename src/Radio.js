import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

const propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    ripple: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

class Radio extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.disabled !== prevProps.disabled) {
            const fnName = this.props.disabled ? 'disable' : 'enable';
            findDOMNode(this).MaterialRadio[fnName]();
        }
        if (this.props.checked !== prevProps.checked) {
            const fnName = this.props.checked ? 'check' : 'uncheck';
            findDOMNode(this).MaterialRadio[fnName]();
        }
    }

    render() {
        const { children, className, name, ripple, value, ...inputProps } = this.props;

        const classes = classNames('mdl-radio mdl-js-radio', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes}>
                <input
                    type="radio"
                    className="mdl-radio__button"
                    value={value}
                    name={name}
                    { ...inputProps }
                />
                <span className="mdl-radio__label">{children}</span>
            </label>
        );
    }
}

Radio.propTypes = propTypes;

export default mdlUpgrade(Radio, true);
