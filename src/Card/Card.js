import React, { PropTypes } from 'react';
import classNames from 'classnames';
import clamp from 'clamp';
import basicClassCreator from '../utils/basicClassCreator';

var shadows = [
    'mdl-shadow--2dp',
    'mdl-shadow--3dp',
    'mdl-shadow--4dp',
    'mdl-shadow--6dp',
    'mdl-shadow--8dp',
    'mdl-shadow--16dp'
];

var Card = (props) => {
    var { className, shadow, children, ...otherProps } = props;

    var hasShadow = typeof shadow !== 'undefined';
    var shadowLevel = clamp(shadow || 0, 0, shadows.length - 1);

    var classes = classNames('mdl-card', {
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
export var CardText = basicClassCreator('CardText', 'mdl-card__supporting-text');
export var CardMenu = basicClassCreator('CardMenu', 'mdl-card__menu');
