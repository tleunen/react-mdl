import React, { PropTypes } from 'react';
import classNames from 'classnames';

class CardTitle extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        expand: PropTypes.bool
    }

    render() {
        var { className, children, expand, ...otherProps } = this.props;

        var classes = classNames('mdl-card__title', {
            'mdl-card--expand': expand
        }, className);

        var title;
        if(typeof children === 'string') {
            title = React.createElement('h2', { className: 'mdl-card__title-text' }, children);
        }
        else {
            title = children;
        }

        return (
            <div className={classes} {...otherProps}>
                {title}
            </div>
        );
    }
}

export default CardTitle;