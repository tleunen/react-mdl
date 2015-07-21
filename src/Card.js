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
        var shadowLevel = clamp(this.props.shadowLevel || 0, 0, shadows.length - 1);
        var expandTitle = !!this.props.expandTitle;

        var cardClasses = classNames('mdl-card', shadows[shadowLevel]);
        var titleClasses = classNames('mdl-card__title', {
            'mdl-card--expand': expandTitle
        });

        var { style } = this.props;

        return (
            <div className={cardClasses} style={style}>
                {this.props.title ? (
                    <div className={titleClasses}>
                        <h2 className="mdl-card__title-text">{this.props.title}</h2>
                    </div>
                ) : null}
                <div className="mdl-card__supporting-text">
                    {this.props.children}
                </div>
                {this.props.actions ? (
                    <div className="mdl-card__actions mdl-card--border">
                        {this.props.actions}
                    </div>
                ) : null}
            </div>
        );
    }
}

Card.propTypes = {
    actions: PropTypes.object,
    expandTitle: PropTypes.bool,
    shadowLevel: PropTypes.number,
    style: PropTypes.object,
    title: PropTypes.string
};

export default Card;
