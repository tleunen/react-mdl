import React, { PropTypes, Children, cloneElement } from 'react';
import classNames from 'classnames';

class ListItemAction extends React.Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        className: PropTypes.string,
        info: PropTypes.string
    };

    static defaultProps = {
        info: null
    };

    render() {
        const { className, info } = this.props;

        const classes = classNames('mdl-list__item-secondary-content', className);

        let { children } = this.props;

        try {
            const child = Children.only(children);
            children = cloneElement(child, {
                className: classNames('mdl-list__item-secondary-action', child.props.className)
            });
        }
        catch (e) {
            throw new Error('ListItemAction only accepts one child');
        }

        let infoElement = null;

        if (info) {
            infoElement = <span className="mdl-list__item-secondary-info">{info}</span>;
        }

        return (
            <span className={classes}>
                {infoElement}
                {children}
            </span>
        );
    }
}

export default ListItemAction;
