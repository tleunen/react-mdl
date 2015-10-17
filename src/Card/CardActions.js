import React, { PropTypes } from 'react';
import classNames from 'classnames';

class CardActions extends React.Component {
    static propTypes = {
        border: PropTypes.bool,
        className: PropTypes.string
    }

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

export default CardActions;