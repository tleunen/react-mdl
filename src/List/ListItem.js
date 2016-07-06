import React, { PropTypes, Children, cloneElement } from 'react';
import classNames from 'classnames';
import ListItemContent from './ListItemContent';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    twoLine: PropTypes.bool,
    threeLine: PropTypes.bool
};

const ListItem = props => {
    const { className, twoLine, threeLine, ...otherProps } = props;

    const classes = classNames('mdl-list__item', {
        'mdl-list__item--two-line': twoLine && !threeLine,
        'mdl-list__item--three-line': !twoLine && threeLine,
    }, className);

    const children = Children.map(otherProps.children, child => {
        if (typeof child === 'string') {
            return <ListItemContent>{child}</ListItemContent>;
        }
        if (child.type === ListItemContent) {
            return cloneElement(child, {
                useBodyClass: !!threeLine
            });
        }
        return child;
    });

    return (
        <li className={classes} {...otherProps}>
            {children}
        </li>
    );
};

ListItem.propTypes = propTypes;

export default ListItem;
