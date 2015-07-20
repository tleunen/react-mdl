import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Button from './Button';

class FABButton extends Button {
    render() {
        var classes = classNames('mdl-button--fab', {
            'mdl-button--mini-fab': this.props.mini
        });

        return (
            <Button
                className={classes}
                icon={this.props.icon}
                colored={this.props.colored}
                disabled={this.props.disabled}
            />
        );
    }
}

FABButton.propTypes = {
    colored: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    mini: PropTypes.bool
};

export default FABButton;
