import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Button from './Button';

var FABButton = (props) => {
    var { mini, className, children, ...otherProps } = props;

    var classes = classNames('mdl-button--fab', {
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
