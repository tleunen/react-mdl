import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Button from './Button';

const FABButton = (props) => {
    const { mini, className, children, ...otherProps } = props;

    const classes = classNames('mdl-button--fab', {
        'mdl-button--mini-fab': mini
    }, className);

    return (
        <Button className={classes} {...otherProps}>{children}</Button>
    );
};

FABButton.propTypes = {
    className: PropTypes.string,
    mini: PropTypes.bool
};

export default FABButton;
