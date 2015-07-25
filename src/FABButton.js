import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Button from './Button';

class FABButton extends React.Component {
    render() {
        var { mini, className, ...otherProps } = this.props;

        var classes = classNames('mdl-button--fab', {
            'mdl-button--mini-fab': mini
        }, className);

        return (
            <Button className={classes} {...otherProps} />
        );
    }
}

FABButton.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    mini: PropTypes.bool
};

export default FABButton;
