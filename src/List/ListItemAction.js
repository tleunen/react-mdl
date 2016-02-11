import React, { PropTypes } from 'react';
import classNames from 'classnames';

class ListItemAction extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        info: PropTypes.string
    };

    static defaultProps = {
        info: null
    };

    render() {
        const { className, info } = this.props;

        const classes = classNames('mdl-list__item-secondary-content', className);

        const children = React.Children.map(this.props.children, child => {
            const toAdd = 'mdl-list__item-secondary-action';
            const childClassName = child.props.className ? `${child.props.className} ${toAdd}` : toAdd;

            return React.createElement(child.type, Object.assign({}, child.props, {
                className: childClassName
            }));
        });

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
