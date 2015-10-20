import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

function Switch( props ) {
    var { className, id, ripple, children, ...inputProps } = props;
    var inputId = 'switch-' + id;

    var classes = classNames('mdl-switch mdl-js-switch', {
        'mdl-js-ripple-effect': ripple
    }, className);

    return (
        <label className={classes} htmlFor={inputId}>
            <input
                type="checkbox"
                id={inputId}
                className="mdl-switch__input"
                { ...inputProps }
            />
            <span className="mdl-switch__label">{children}</span>
        </label>
    );
}
Switch.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    ripple: PropTypes.bool
};

export default mdlUpgrade(Switch);
