import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.func
    ]),
    cssPrefix: PropTypes.string,
    onTabClick: PropTypes.func,
    style: PropTypes.object,
    tabId: PropTypes.number
};

const defaultProps = {
    style: {}
};

const Tab = (props) => {
    const { active, className, component, children, cssPrefix,
        onTabClick, style, tabId, ...otherProps } = props;

    const classes = classNames({
        [`${cssPrefix}__tab`]: true,
        'is-active': active
    }, className);

    style.cursor = 'pointer';

    return React.createElement(component || 'a', {
        className: classes,
        onClick: () => onTabClick(tabId),
        style,
        ...otherProps
    }, children);
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
