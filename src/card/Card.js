import React, { PropTypes } from 'react';
import classNames from 'classnames';
import clamp from 'clamp';
import basicClassCreator from '../utils/BasicClassCreator';

var shadows = [
    'mdl-shadow--2dp',
    'mdl-shadow--3dp',
    'mdl-shadow--4dp',
    'mdl-shadow--6dp',
    'mdl-shadow--8dp'
];

class Card extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        shadowLevel: PropTypes.number
    }

    render() {
        var { className, shadowLevel, ...otherProps } = this.props;
        shadowLevel = clamp(shadowLevel || 0, 0, shadows.length - 1);

        var classes = classNames('mdl-card', shadows[shadowLevel], className);

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
export var CardText = basicClassCreator('mdl-card__supporting-text');
export var CardMenu = basicClassCreator('mdl-card__menu');
