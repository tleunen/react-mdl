import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Button from './Button';

class IconButton extends React.Component {
    render() {
        var { className, ...otherProps } = this.props;

        var classes = classNames('mdl-button--icon', className);

        return <Button className={classes} {...otherProps} />;
    }
}

IconButton.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired
};

export default IconButton;
