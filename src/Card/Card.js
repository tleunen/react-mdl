import React, { PropTypes } from 'react';
import classNames from 'classnames';
import clamp from 'clamp';
import shadows from '../utils/shadows';

const propTypes = {
    className: PropTypes.string,
    shadow: PropTypes.number
};

const Card = (props) => {
    const { className, shadow, children, ...otherProps } = props;

    const hasShadow = typeof shadow !== 'undefined';
    const shadowLevel = clamp(shadow || 0, 0, shadows.length - 1);

    const classes = classNames('mdl-card', {
        [shadows[shadowLevel]]: hasShadow
    }, className);

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

Card.propTypes = propTypes;

export default Card;
