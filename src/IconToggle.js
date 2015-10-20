import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import mdlUpgrade from './utils/mdlUpgrade';

function IconToggle( props ) {
    var { className, id, name, ripple, ...inputProps } = props;
    var inputId = 'icon-toggle-' + id;

    var classes = classNames('mdl-icon-toggle mdl-js-icon-toggle', {
        'mdl-js-ripple-effect': ripple
    }, className);

    return (
        <label className={classes} htmlFor={inputId}>
            <input
                type="checkbox"
                id={inputId}
                className="mdl-icon-toggle__input"
                { ...inputProps }
            />
            <Icon className="mdl-icon-toggle__label" name={name} />
        </label>
    );
}
IconToggle.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    ripple: PropTypes.bool
};

export default mdlUpgrade(IconToggle);
