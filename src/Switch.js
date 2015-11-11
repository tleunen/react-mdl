import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Switch extends React.Component {
    static propTypes = {
        checked: PropTypes.bool,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        ripple: PropTypes.bool
    }

    componentDidUpdate(prevProps) {
        if(this.props.disabled !== prevProps.disabled) {
            const fnName = this.props.disabled ? 'disable' : 'enable';
            findDOMNode(this).MaterialSwitch[fnName]();
        }
        if(this.props.checked !== prevProps.checked) {
            const fnName = this.props.checked ? 'on' : 'off';
            findDOMNode(this).MaterialSwitch[fnName]();
        }
    }

    render() {
        const { className, ripple, children, ...inputProps } = this.props;

        const classes = classNames('mdl-switch mdl-js-switch', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes}>
                <input
                    type="checkbox"
                    className="mdl-switch__input"
                    { ...inputProps }
                />
                <span className="mdl-switch__label">{children}</span>
            </label>
        );
    }
}

export default mdlUpgrade(Switch);
