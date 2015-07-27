import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Button from './Button';
import Icon from './Icon';

class IconButton extends React.Component {
    render() {
        var { className, name, ...otherProps } = this.props;

        var classes = classNames('mdl-button--icon', className);

        return (
            <Button className={classes} {...otherProps}>
                <Icon name={name} />
            </Button>
        );
    }
}

IconButton.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired
};

export default IconButton;
