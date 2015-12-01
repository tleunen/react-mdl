import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Checkbox extends React.Component {
    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        label: PropTypes.string,
        onChange: PropTypes.func,
        ripple: PropTypes.bool
    }

    componentDidUpdate(prevProps) {
        if(this.props.disabled !== prevProps.disabled) {
            const fnName = this.props.disabled ? 'disable' : 'enable';
            findDOMNode(this).MaterialCheckbox[fnName]();
        }
        if(this.props.checked !== prevProps.checked) {
            const fnName = this.props.checked ? 'check' : 'uncheck';
            findDOMNode(this).MaterialCheckbox[fnName]();
        }
    }

    render() {
        const { label, ripple, ...inputProps } = this.props;

        const classes = classNames('mdl-checkbox mdl-js-checkbox', {
            'mdl-js-ripple-effect': ripple
        });

        return (
            <label className={classes}>
                <input
                    type="checkbox"
                    className="mdl-checkbox__input"
                    { ...inputProps }
                />
                {label && <span className="mdl-checkbox__label">{label}</span>}
            </label>
        );
    }
}

export default mdlUpgrade(Checkbox);
