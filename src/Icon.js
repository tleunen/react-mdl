import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Icon extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        name: PropTypes.string.isRequired
    }

    render() {
        var { className, name, ...otherProps } = this.props;
        var classes = classNames('material-icons', className);

        return <i className={classes} {...otherProps}>{name}</i>;
    }
}

export default Icon;
