import React, { PropTypes } from 'react';
import classNames from 'classnames';

class ListItemContent extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        icon: PropTypes.string,
        subtitle: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string
        ]),
        threeLine: PropTypes.bool
    };

    static defaultProps = {
        icon: null,
        subtitle: null,
        threeLine: false
    };

    render() {
        const { children, className, icon, subtitle, threeLine, ...otherProps } = this.props;

        const classes = classNames('mdl-list__item-primary-content', className);

        let iconElement = null;

        if (icon) {
            iconElement = (
                <i className="material-icons mdl-list__item-avatar">{icon}</i>
            );
        }

        let subtitleElement = null;

        if (subtitle) {
            const subtitleClassName = threeLine ? 'mdl-list__item-text-body' : 'mdl-list__item-subtitle';

            subtitleElement = (
                <span className={subtitleClassName}>
                    {subtitle}
                </span>
            );
        }

        return (
            <span className={classes}>
                {iconElement}
                <span>
                    {children}
                </span>
                {subtitleElement}
            </span>
        );
    }
}

export default ListItemContent;
