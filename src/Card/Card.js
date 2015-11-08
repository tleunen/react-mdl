import React, { PropTypes } from 'react';
import classNames from 'classnames';
import clamp from 'clamp';

const shadows = [
    'mdl-shadow--2dp',
    'mdl-shadow--3dp',
    'mdl-shadow--4dp',
    'mdl-shadow--6dp',
    'mdl-shadow--8dp',
    'mdl-shadow--16dp'
];

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
Card.propTypes = {
    className: PropTypes.string,
    shadow: PropTypes.number
};

export default Card;
