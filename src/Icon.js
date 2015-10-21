import React, { PropTypes } from 'react';
import classNames from 'classnames';

var Icon = (props) => {
    var { className, name, ...otherProps } = props;
    var classes = classNames('material-icons', className);

    return <i className={classes} {...otherProps}>{name}</i>;
};

Icon.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired
};

export default Icon;
