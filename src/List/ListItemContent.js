import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

class ListItemContent extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        icon: PropTypes.string,
        subtitle: PropTypes.node,
        useBodyClass: PropTypes.bool
    };

    static defaultProps = {
        useBodyClass: false
    };

    render() {
        const { children, className, icon, subtitle, useBodyClass, ...otherProps } = this.props;

        const classes = classNames('mdl-list__item-primary-content', className);

        const subtitleClassName = useBodyClass ? 'mdl-list__item-text-body' : 'mdl-list__item-subtitle';

        return (
            <span className={classes}>
                {icon && <Icon name={icon} />}
                <span>
                    {children}
                </span>
                {subtitle && <span className={subtitleClassName}>
                    {subtitle}
                </span>}
            </span>
        );
    }
}

export default ListItemContent;
