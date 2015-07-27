import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Icon extends React.Component {
    render() {
        var { className, name, ...otherProps } = this.props;
        var classes = classNames('material-icons', className);

        return <i className={classes} {...otherProps}>{name}</i>;
    }
}

Icon.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired
};

export default Icon;
