import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

function Radio( props ) {
    var { children, className, name, ripple, value, ...inputProps } = props;
    var inputId = 'radio-' + name.replace(/\s+/g, '') + '-' + value.replace(/\s+/g, '');

    var classes = classNames('mdl-radio mdl-js-radio', {
        'mdl-js-ripple-effect': ripple
    }, className);

    return (
        <label className={classes} htmlFor={inputId}>
            <input
                type="radio"
                id={inputId}
                className="mdl-radio__button"
                value={value}
                name={name}
                { ...inputProps }
            />
            <span className="mdl-radio__label">{children}</span>
        </label>
    );
}
Radio.propTypes = {
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

export default mdlUpgrade(Radio);
