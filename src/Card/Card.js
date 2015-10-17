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

class Card extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        shadowLevel: PropTypes.number
    }

    render() {
        var { className, shadowLevel, ...otherProps } = this.props;

        var showShadow = typeof shadowLevel !== 'undefined';

        shadowLevel = clamp(shadowLevel || 0, 0, shadows.length - 1);

        var shadow = {};
        shadow[shadows[shadowLevel]] = showShadow;

        var classes = classNames('mdl-card',shadow, className);

        return (
            <div className={classes} {...otherProps}>
                {this.props.children}
            </div>
        );
    }
}

export default Card;
export CardTitle from './CardTitle';
export CardActions from './CardActions';
export var CardText = basicClassCreator('CardText', 'mdl-card__supporting-text');
export var CardMenu = basicClassCreator('CardMenu', 'mdl-card__menu');
