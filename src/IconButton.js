import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import Icon from './Icon';

const IconButton = (props) => {
    const { className, name, ...otherProps } = props;

    const classes = classNames('mdl-button--icon', className);

    return (
        <Button className={classes} {...otherProps}>
            <Icon name={name} />
        </Button>
    );
};

IconButton.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired
};

export default IconButton;
