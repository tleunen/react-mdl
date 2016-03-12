import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

class ListItemContent extends React.Component {
    static propTypes = {
        avatar: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        className: PropTypes.string,
        icon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        subtitle: PropTypes.node,
        useBodyClass: PropTypes.bool
    };

    createIcon(type, icon) {
        if (typeof icon === 'string') {
            return <Icon className={`mdl-list__item-${type}`} name={icon} />;
        }
        return React.cloneElement(icon, { className: `mdl-list__item-${type}` });
    }

    render() {
        const { avatar, children, className, icon,
            subtitle, useBodyClass, ...otherProps } = this.props;

        const classes = classNames('mdl-list__item-primary-content', className);
        const subtitleClassName = useBodyClass ? 'mdl-list__item-text-body' : 'mdl-list__item-sub-title';

        let iconElement = null;
        if (icon) {
            iconElement = this.createIcon('icon', icon);
        }
        else if (avatar) {
            iconElement = this.createIcon('avatar', avatar);
        }

        return (
            <span className={classes} {...otherProps}>
                {iconElement}
                <span>{children}</span>
                {subtitle && <span className={subtitleClassName}>{subtitle}</span>}
            </span>
        );
    }
}

export default ListItemContent;
