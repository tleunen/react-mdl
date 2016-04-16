import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
    border: PropTypes.bool,
    className: PropTypes.string
};

const CardActions = (props) => {
    const { className, border, children, ...otherProps } = props;

    const classes = classNames('mdl-card__actions', {
        'mdl-card--border': border
    }, className);

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

CardActions.propTypes = propTypes;

export default CardActions;
