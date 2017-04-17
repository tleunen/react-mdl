import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired
};

const Icon = (props) => {
    const { className, name, ...otherProps } = props;
    const classes = classNames('material-icons', className);

    return <i className={classes} {...otherProps}>{name}</i>;
};

Icon.propTypes = propTypes;

export default Icon;
