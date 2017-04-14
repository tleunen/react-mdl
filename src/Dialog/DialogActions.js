import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DialogActions = (props) => {
    const { className, fullWidth, children, ...otherProps } = props;

    const classes = classNames('mdl-dialog__actions', {
        'mdl-dialog__actions--full-width': fullWidth
    }, className);

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

DialogActions.propTypes = {
    className: PropTypes.string,
    fullWidth: PropTypes.bool
};

export default DialogActions;
