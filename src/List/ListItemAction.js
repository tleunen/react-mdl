import React, { PropTypes } from 'react';
import classNames from 'classnames';

class ListItemAction extends React.Component {
    static propTypes = {
        children: PropTypes.element,
        className: PropTypes.string,
        info: PropTypes.string
    };

    render() {
        const { children, className, info, ...otherProps } = this.props;

        const classes = classNames('mdl-list__item-secondary-content', className);

        return (
            <span className={classes} {...otherProps}>
                {info && <span className="mdl-list__item-secondary-info">{info}</span>}
                <span className="mdl-list__item-secondary-action">
                    {children}
                </span>
            </span>
        );
    }
}

export default ListItemAction;
