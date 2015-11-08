import React, { PropTypes } from 'react';
import classNames from 'classnames';

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

CardActions.propTypes = {
    border: PropTypes.bool,
    className: PropTypes.string
};

export default CardActions;
