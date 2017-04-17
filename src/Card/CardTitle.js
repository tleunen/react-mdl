import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string,
    expand: PropTypes.bool
};

const CardTitle = props => {
    const { className, children, expand, ...otherProps } = props;

    const classes = classNames('mdl-card__title', {
        'mdl-card--expand': expand
    }, className);

    const title = typeof children === 'string'
        ? <h2 className="mdl-card__title-text">{children}</h2>
        : children;

    return (
        <div className={classes} {...otherProps}>
            {title}
        </div>
    );
};

CardTitle.propTypes = propTypes;

export default CardTitle;
