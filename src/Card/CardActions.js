import React, { PropTypes } from 'react';
import classNames from 'classnames';

var CardActions = (props) => {
    var { className, border, children, ...otherProps } = props;

    var classes = classNames('mdl-card__actions', {
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
