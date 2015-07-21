import React, { PropTypes } from 'react';
import Button from './Button';

class IconButton extends React.Component {
    render() {
        return (
            <Button
                className="mdl-button--icon"
                icon={this.props.icon}
                colored={this.props.colored}
                disabled={this.props.disabled}
            />
        );
    }
}

IconButton.propTypes = {
    colored: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string.isRequired
};

export default IconButton;
