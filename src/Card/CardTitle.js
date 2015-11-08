import React, { PropTypes } from 'react';
import classNames from 'classnames';

class CardTitle extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        expand: PropTypes.bool
    }

    render() {
        const { className, children, expand, ...otherProps } = this.props;

        const classes = classNames('mdl-card__title', {
            'mdl-card--expand': expand
        }, className);

        const title = typeof children === 'string'
            ? React.createElement('h2', { className: 'mdl-card__title-text' }, children)
            : children;

        return (
            <div className={classes} {...otherProps}>
                {title}
            </div>
        );
    }
}

export default CardTitle;
