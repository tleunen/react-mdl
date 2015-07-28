import React, { PropTypes } from 'react';
import classNames from 'classnames';
import clamp from 'clamp';

var shadows = [
    'mdl-shadow--2dp',
    'mdl-shadow--3dp',
    'mdl-shadow--4dp',
    'mdl-shadow--6dp',
    'mdl-shadow--8dp'
];

class Card extends React.Component {
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

Card.propTypes = {
    className: PropTypes.string,
    shadowLevel: PropTypes.number
};

export default Card;

export class CardTitle extends React.Component {
    render() {
        var { className, children, expand, ...otherProps } = this.props;

        var classes = classNames('mdl-card__title', {
            'mdl-card--expand': expand
        }, className);

        var title;
        if(typeof children === 'string') {
            title = React.createElement('h2', { className: 'mdl-card__title-text' }, children);
        }
        else {
            title = children;
        }

        return (
            <div className={classes} {...otherProps}>
                {title}
            </div>
        );
    }
}

CardTitle.propTypes = {
    className: PropTypes.string,
    expand: PropTypes.bool
};

export class CardActions extends React.Component {
    render() {
        var { className, border, ...otherProps } = this.props;

        var classes = classNames('mdl-card__actions', {
            'mdl-card--border': border
        }, className);

        return (
            <div className={classes} {...otherProps}>
                {this.props.children}
            </div>
        );
    }
}

CardActions.propTypes = {
    border: PropTypes.bool,
    className: PropTypes.string
};

function createBasicCardClass(defaultClassName) {
    class BasicCardClass extends React.Component {
        render() {
            var { className, ...otherProps } = this.props;

            var classes = classNames(defaultClassName, className);

            return (
                <div className={classes} {...otherProps}>
                    {this.props.children}
                </div>
            );
        }
    }

    BasicCardClass.propTypes = {
        className: PropTypes.string
    };

    return BasicCardClass;
}

export var CardText = createBasicCardClass('mdl-card__supporting-text');
export var CardMenu = createBasicCardClass('mdl-card__menu');
