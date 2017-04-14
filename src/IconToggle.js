import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import Icon from './Icon';
import mdlUpgrade from './utils/mdlUpgrade';

const propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    ripple: PropTypes.bool
};

class IconToggle extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.disabled !== prevProps.disabled) {
            const fnName = this.props.disabled ? 'disable' : 'enable';
            findDOMNode(this).MaterialIconToggle[fnName]();
        }
        if (this.props.checked !== prevProps.checked) {
            const fnName = this.props.checked ? 'check' : 'uncheck';
            findDOMNode(this).MaterialIconToggle[fnName]();
        }
    }

    render() {
        const { className, name, ripple, ...inputProps } = this.props;

        const classes = classNames('mdl-icon-toggle mdl-js-icon-toggle', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes}>
                <input
                    type="checkbox"
                    className="mdl-icon-toggle__input"
                    { ...inputProps }
                />
                <Icon className="mdl-icon-toggle__label" name={name} />
            </label>
        );
    }
}

IconToggle.propTypes = propTypes;

export default mdlUpgrade(IconToggle, true);
