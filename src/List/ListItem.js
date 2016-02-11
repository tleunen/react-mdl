import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ListItemContent from './ListItemContent';

class ListItem extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        twoLine: PropTypes.bool,
        threeLine: PropTypes.bool
    };

    static defaultProps = {
        twoLine: false,
        threeLine: false
    };

    render() {
        const { className, twoLine, threeLine, ...otherProps } = this.props;

        const classes = classNames('mdl-list__item', {
            'mdl-list__item--two-line': twoLine,
            'mdl-list__item--three-line': threeLine,
        }, className);

        const children = React.Children.map(otherProps.children, child => {
            let component = child;

            if (child.type === ListItemContent) {
                // Pass the threeLine prop in order to define the correct className
                // later in ListItemContent.

                component = <ListItemContent {...child.props} threeLine />;
            }

            return component;
        });

        return (
            <li className={classes} {...otherProps}>
                {children}
            </li>
        );
    }
}

export default ListItem;
