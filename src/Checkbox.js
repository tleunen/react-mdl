import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

var Checkbox = (props) => {
    var { label, ripple, ...inputProps } = props;

    var classes = classNames('mdl-checkbox mdl-js-checkbox', {
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
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    ripple: PropTypes.bool
};

export default mdlUpgrade(Checkbox);
