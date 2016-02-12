import React, { PropTypes, Children, cloneElement } from 'react';
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

        const child = cloneElement(Children.only(children), {
            className: classNames('mdl-list__item-secondary-action', Children.only(children).props.className)
        });


        return (
            <span className={classes} {...otherProps}>
                {info && <span className="mdl-list__item-secondary-info">{info}</span>}
                {child}
            </span>
        );
    }
}

export default ListItemAction;
